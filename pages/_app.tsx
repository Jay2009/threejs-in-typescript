import "../styles/globals.css"

import "../styles/globals.css"

import type { AppProps } from "next/app"
import React from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className='max-h-xl mx-auto h-full w-full max-w-xl  bg-red-50'>
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
