import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // <Html lang="en">
    <html className="h-full bg-white">
      <Head />
      <body className="antialiased bg-white">
        <Main />
        <NextScript />
      </body>
    </html>
    // </Html>
  );
}
