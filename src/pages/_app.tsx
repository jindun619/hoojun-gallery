import { AppProps } from "next/app";

import { Noto_Sans_KR } from "next/font/google";

import "../styles/global.css";
import Layout from "@/components/Layout";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={notoSansKr.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
