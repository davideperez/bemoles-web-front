/* 

function Sum-Arte () = () => {
    return (
    )
}

 */

import { Flex, Image, Stack } from "@chakra-ui/react";

 {/* 01 */}
 <Flex
  gap="24px"
  flexWrap="nowrap"
  alignItems="center"
 >



    {/* a */} 
    <Flex
      flexDirection="column"
      flex={1}
      alignItems={"center"}
      alignSelf={"stretch"}
    >
        {/* Img 1 */}
        <Flex 
          flexGrow={1}
        >
          <Image alt=""
            objectFit={"cover"}
          />
        </Flex>
        {/* Img 2 */}
        <Flex 
          as="picture"
          flexGrow={1}
        >
          <Image alt="" objectFit={"cover"} />
        </Flex>
    </Flex>



    {/* b */} 
    <Stack 
      spacing="24px"
      flex={2}
    >
      Texts
    </Stack>



    {/* c */} 
    <Flex 
      maxW={"550px"}
      alignSelf={"stretch"}
    >
      <Image
        alt="" objectFit={"cover"}
      />
    </Flex>
</Flex>