'use client'
import 'styles/globals.css'
import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import Script from 'next/script'
import { canUseDom } from 'utils/shared'

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <title>中苏达尔阀门科技(杭州)有限公司</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
