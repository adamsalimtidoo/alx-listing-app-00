// pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css"; // Ensure your global styles are loaded

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
