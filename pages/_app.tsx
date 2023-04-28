import "@app/styles/globals.css";
import localFont from "next/font/local";
import { DefaultSeo } from "next-seo";

const myFont = localFont({ src: "./clashDisplay.woff2" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Obsqura 2023"
        description="National Techno Cultural Fiesta of ICET"
      />
      <div className={myFont.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
