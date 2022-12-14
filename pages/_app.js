import Head from 'next/head'
import Layout from '../components/layouts/primary/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>NextJS App Template</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
