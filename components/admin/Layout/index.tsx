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

/* Variable que se ha definido como bandera booleana fuera del componente React Layout 
para realizar un seguimiento de si el componente ha sido montado o no.
--> para evitar que se realicen ciertas acciones en el primer renderizado del componente 
que puedan causar efectos secundarios no deseados o innecesarios. 
*/

let mounted = false;

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  //3.0 
  const verifyUser = useCallback(() => {
    authService
      .refreshToken()
      .then(async ({ data }) => {
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
        setToken('')
        router.replace("/admin/login");
      });
  }, [setUser, router]);

  useEffect(() => {
    /* 1.0 Se chequea que el entorno de ejecucion sea la ventana del navegador, 
    y que el componente no haya sido ya montado aun. */
    if (typeof window !== "undefined" && !mounted) {
      /*2.0 Se marca la bandera como true 
      y de esta manera controlamos que la primer accion sera el verify user. */
      mounted = true;
      //3.0 Se llama al servicio de autenticacion de token.
      verifyUser();
      setIsLoading(false);
    }
  }, [verifyUser]);

     const syncLogout = (event: any) => {
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
