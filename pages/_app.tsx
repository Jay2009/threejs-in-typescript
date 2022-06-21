import "../styles/globals.css"

import type { AppProps } from "next/app"
import React from "react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <section className='background-image'>
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
