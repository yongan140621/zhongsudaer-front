import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body>
        {/* <Script
          src="https://api.map.baidu.com/api?type=webgl&v=1.0&ak=WHRSRcIb1WGj7nP8eVyOvzYXkBzEb5jA"
          strategy="beforeInteractive"
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
