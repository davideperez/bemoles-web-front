import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/admin/Layout";
import { UserProvider } from "../context/userContext";
import { useRouter } from "next/router";
import { Manrope } from "next/font/google";
import localFont from 'next/font/local'
import PublicLayout from "../components/public/PublicLayout";

const manrope = Manrope({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <UserProvider>
        {router.asPath.includes("/admin") ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <main className={manrope.className}>
            {router.asPath === "/" ? (
              <Component {...pageProps} />
            ) : (
              <PublicLayout>
                <Component {...pageProps} />
              </PublicLayout>
            )}
          </main>
        )}
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;

//Version de entrega de admin.
