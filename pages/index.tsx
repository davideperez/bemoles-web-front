import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "../styles/Home.module.css";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "../components/admin/Login/Logo";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Los bemoles</title>
      </Head>
      <Stack
        bg="#3B424A"
        color="white"
        minH="100vh"
        display="flex"
        alignItems={"center"}
      >
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Logo />
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Proximamente
              <Text as={"span"} color={"green.400"}>
                .
              </Text>
            </Heading>
            <Flex justifyContent={"center"}>
              <Link
                href="https://www.instagram.com/losbemoles/"
                isExternal
                bg="white"
                borderRadius={"50%"}
                p="13px"
                mr={5}
                color="black"
                border="2px solid #fff"
                _hover={{ color: "white", bg: "none", transform: "scale(1.2)", "-webkit-transform":  "scale(1.2)"}}
              >
                <AiOutlineInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/losbemoles"
                isExternal
                bg="white"
                borderRadius={"50%"}
                p="13px"
                color="black"
                border="2px solid #fff"
                _hover={{ color: "white", bg: "none", transform: "scale(1.2)", "-webkit-transform":  "scale(1.2)"}}
              >
                <GrFacebookOption />
              </Link>
            </Flex>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Home;
