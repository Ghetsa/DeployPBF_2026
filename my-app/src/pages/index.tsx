import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Deploy Next.js Matkul PBF</title>
        <meta name="description" content="Deploy Next.js Matkul PBF" />
      </Head>

      <main className={`${inter.className} ${styles.main}`}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/produk" className={styles.navLink}>
            Produk
          </Link>
          <Link href="/profile" className={styles.navLink}>
            Profile
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>

        <section className={styles.hero}>
          <h1 className={styles.title}>Praktikum Next.js Pages Router</h1>

          <p className={styles.subtitle}>
            Mahasiswa D4 TI Pengembangan Web dengan Framework.
          </p>

          <p className={styles.text}>This is me learning Next.js</p>
        </section>
      </main>
    </>
  )
}