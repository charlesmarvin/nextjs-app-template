import Head from 'next/head'
import Layout from '../components/layouts/primary/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="NextJS App Template" />

        <link rel="manifest" href="manifest.json" />

        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/manifest.json" />

        <meta name="apple-mobile-web-app-status-bar" content="#db4938" />
        <meta name="theme-color" content="#db4938" />

        <title>NextJS App Template</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
