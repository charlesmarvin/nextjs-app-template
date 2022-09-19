import Head from 'next/head'
import Layout from '../components/layouts/primary/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS App Template</title>
        <meta name="description" content="NextJS App Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
