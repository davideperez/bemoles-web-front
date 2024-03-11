import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { eventService } from "../../../services/events.service";
import instagramApi from "../../../services/instagram.service";

const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
interface IgPost {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
}

interface Props {
  igPosts: IgPost[];
}

const FollowUS: FC<Props> = ({ igPosts }) => {
  const [isLgOrBigger, setIsLgOrBigger] = useState(true);
  // const [igPosts, setIgPosts] = useState<IgPost[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsLgOrBigger(window.innerWidth > 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data: igPostsToShow } = await instagramApi.getPosts(
  //         accessToken as string,
  //         isLgOrBigger ? 9 : 3
  //       );
  //       setIgPosts(igPostsToShow.media.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, [isLgOrBigger]);

  return (
    <Stack
      as="section"
      px={{ base: "16px", lg: "80px" }}
      alignItems={"center"}
      spacing="2rem"
      py="4rem"
      bg={{
        base: "url('/images/followUsMobile.png')",
        lg: "url('/images/followUs.png')",
      }}
      objectFit={"cover"}
      objectPosition="center"
      backgroundPosition={{ base: "center", lg: "center" }}
      backgroundRepeat={"no-repeat"}
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        gap="2rem"
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems={"center"}
        w="948px"
      >
        <Text
          color="#3B424A"
          as="h4"
          fontFamily={"DM Serif Display"}
          fontSize="54px"
          fontWeight={400}
          lineHeight="54px"
          letterSpacing={"2.2px"}
        >
          ¡Seguinos!
        </Text>
        <Flex gap="16px" alignItems={"center"}>
          <Link
            href="https://www.instagram.com/losbemoles/"
            isExternal
            bg="white"
            borderRadius={"50%"}
            color="black"
            border="2px solid #fff"
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            _hover={{
              color: "black",
              bg: "none",
              transform: "scale(1.2)",
              "-webkit-transform": "scale(1.2)",
            }}
          >
            <Icon as={AiOutlineInstagram} w="32px" h="32px" />
          </Link>
          <Link
            href="https://www.facebook.com/losbemoles"
            isExternal
            bg="white"
            borderRadius={"50%"}
            color="black"
            border="2px solid #fff"
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            _hover={{
              color: "black",
              bg: "none",
              transform: "scale(1.2)",
              "-webkit-transform": "scale(1.2)",
            }}
          >
            <Icon as={BsFacebook} w="32px" h="32px" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCZiynJlarViws3OdsLdocIA"
            isExternal
            bg="white"
            borderRadius={"50%"}
            color="black"
            border="2px solid #fff"
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            _hover={{
              color: "black",
              bg: "none",
              transform: "scale(1.2)",
              "-webkit-transform": "scale(1.2)",
            }}
          >
            <Icon as={BsYoutube} w="32px" h="32px" />
          </Link>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{ base: "300px", lg: "repeat(3, 300px)" }}
        templateRows="repeat(3, 300px)"
        gap="24px"
      >
        {igPosts?.slice(0, isLgOrBigger ? 9 : 3).map((post) => (
          <GridItem bg="transparent" position="relative" key={post.id} sx={{'> video': {w: '100%', h: '100%',  objectFit: "cover"}, '&:hover > .post-hover': { display: "flex"}}} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
            {post.media_type !== "VIDEO" ? (
              <Image
                src={post.media_url}
                alt={post.caption}
                w="100%"
                h="100%"
                objectFit={"cover"}
              />
            ) : (
                <video title={post.caption} src={post.media_url}/>
            )}
             {post.media_type === "VIDEO" && <Icon as={FaPlay} color="white" position="absolute" top="5px" right="5px" />}
             <Link href="https://www.instagram.com/losbemoles/" isExternal position="absolute" bg="rgba(40, 39, 39, 0.47)" cursor="pointer" top="0px" left="0px" w="100%" h="100%" className="post-hover" display="none" justifyContent={"center"} alignItems="center">
              <Icon as={AiOutlineInstagram} color="white" w="38px" h="38px" />
             </Link>
          </GridItem>
        ))}
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        <GridItem bg="#D9D9D9"></GridItem>
        {isLgOrBigger && (
          <>
            <GridItem bg="#D9D9D9"></GridItem>
            <GridItem bg="#D9D9D9"></GridItem>
            <GridItem bg="#D9D9D9"></GridItem>
            <GridItem bg="#D9D9D9"></GridItem>
            <GridItem bg="#D9D9D9"></GridItem>
            <GridItem bg="#D9D9D9"></GridItem>
          </>
        )}
      </Grid>
    </Stack>
  );
};

export default FollowUS;