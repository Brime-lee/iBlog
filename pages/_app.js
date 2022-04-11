import React from 'react'

import '../styles/globals.scss'
import { Layout } from '../components'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
