import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Slice Runner</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>Slice Runner</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <h1>About Us</h1>
        <p>
          At Slice Runner, we are committed to delivering the best pizza
          experience. Our mission is to combine quality, speed, and excellent
          customer service.
        </p>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Slice Runner. All rights reserved.</p>
        <nav className={styles.footerNav}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </footer>
    </div>
  )
}
