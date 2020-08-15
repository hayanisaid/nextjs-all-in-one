import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const StaticComponent = dynamic(import('../compoenent/clientFile'), {ssr: false})
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StaticComponent />
        <Link href="/page/2">
          <a
            style={{
              color: 'blue'
            }}
          >
            More details
          </a>
        </Link>
      </main>
    </div>
  )
}
