import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import Header from '../components/Header'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <Header/>
        <Component {...pageProps} />
      </MoralisProvider>
    </div>
  )
}

export default MyApp