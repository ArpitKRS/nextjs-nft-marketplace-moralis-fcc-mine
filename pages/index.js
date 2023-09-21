import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace"></meta>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            Hi
        </div>
    )
}