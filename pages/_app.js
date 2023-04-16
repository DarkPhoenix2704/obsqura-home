import "@app/styles/globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "./clashDisplay.woff2" });

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
