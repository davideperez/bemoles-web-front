import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { removeToken, setToken } from "../../../config/localStorage";
import { UserContext } from "../../../context/userContext";
import { authService } from "../../../services/auth.service";
import LeftBar from "../LeftBar";

let mounted = false;

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  const verifyUser = useCallback(() => {
    authService
      .refreshToken()
      .then(async ({ data }) => {
        console.log({data})
        if (data.success) {
          setUser((oldValues) => {
            return { ...oldValues, token: data.token, firstName: data.firstName, lastName: data.lastName};
          });
          setToken(data.token)
        } else {
          setToken('')
          setUser((oldValues) => {
            return { ...oldValues, token: null };
          });
          router.replace("/admin/login");
        }
        // call refreshToken every 5 minutes to renew the authentication token.
        setTimeout(verifyUser, 5 * 60 * 1000);
      })
      .catch((error) => {
        console.log(error);
        setToken('')
        router.replace("/admin/login");
      });
  }, [setUser, router]);

  useEffect(() => {
    if (typeof window !== "undefined" && !mounted) {
      mounted = true;
      verifyUser();
      setIsLoading(false);
    }
  }, [verifyUser]);

     const syncLogout = (event: any) => {
      console.log('eventKey', event.key)
      if (event.key === "logout") {
        removeToken();
        router.replace('/admin/login');
      }
    }
  
    useEffect(() => {
      window.addEventListener("storage", syncLogout)
      return () => {
        window.removeEventListener("storage", syncLogout)
      }
    }, [])

  return (
    <div>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        {!router.asPath.includes("/login") ? (
          <>
            {!user.token ? (
              <div />
            ) : (
              <>
                <LeftBar />
                <Box ml={{ base: 0, md: 56 }} p="4">
                  {children}
                </Box>
              </>
            )}
          </>
        ) : (
          <Center minH="100vh">{children}</Center>
        )}
      </Box>
    </div>
  );
};

export default Layout;
