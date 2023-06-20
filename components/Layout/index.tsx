import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode, useCallback, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { authService } from "../../services/auth.service";
import LeftBar from "../LeftBar";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const verifyUser = useCallback(() => {
    authService.refreshToken().then(async ({ data }) => {
      if (data) {
        setUser((oldValues) => {
          return { ...oldValues, token: data.token };
        });
      } else {
        setUser((oldValues) => {
          return { ...oldValues, token: null };
        });
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000);
    })
    .catch((error) => {
        console.log(error);
      });
  }, [setUser]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  useEffect(() => {
    if (!user.token && !router.asPath.includes("/login") ) router.replace("/admin/login");
    console.log({user})
  }, [router, user]);

  return (
    <div>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        {!router.asPath.includes("/login") ? (
          <>
            <LeftBar />
            <Box ml={{ base: 0, md: 56 }} p="4">
              {children}
            </Box>
          </>
        ) : (
          <Center minH="100vh">{children}</Center>
        )}
      </Box>
    </div>
  );
};

export default Layout;
