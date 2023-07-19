import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/admin/Layout";
import { UserProvider } from "../context/userContext";
import { useRouter } from "next/router";
import { Manrope } from "next/font/google";
import PublicLayout from "../components/public/PublicLayout";

const manrope = Manrope({ subsets: ["latin"] });
// export const dm_serif_display = DM_Serif_Display({ weight: "400", subsets: ["latin"], display: 'swap' });

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
            <PublicLayout>
              <Component {...pageProps} />
            </PublicLayout>
          </main>
        )}
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
