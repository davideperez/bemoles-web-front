import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { UserProvider } from "../context/userContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider>
      <UserProvider>
        {router.asPath.includes("/admin") ? 
        <Layout>
          <Component {...pageProps} />
        </Layout> : <Component {...pageProps} />
        }
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;

//Version de entrega de admin.