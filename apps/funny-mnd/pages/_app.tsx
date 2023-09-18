import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/css/global.css";
import "@/styles/global.css.ts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
