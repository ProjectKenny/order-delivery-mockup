import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Delivery - Order Delivery Mockup</title>
        <meta name="description" content="Best pizza delivery service" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Slice Runner</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Delicious Pizza Delivered Fast</h1>
          <p>Your favorite pizza, just a click away!</p>
          <input
            type="text"
            placeholder="Search your pizza..."
            className={styles.searchBar}
          />
        </div>
      </section>

      <section className={styles.twoColumns}>
        <div className={styles.column}>
          <h2>Hire a Driver</h2>
          <img
            src="/icons/hire-driver.svg"
            alt="Hire a Driver"
            className={styles.svgIcon}
          />
          <p>Get your pizza delivered by the best drivers in town.</p>
        </div>
        <div className={styles.column}>
          <h2>Track Delivery</h2>
          <img
            src="/icons/track-delivery.svg"
            alt="Track Delivery"
            className={styles.svgIcon}
          />
          <p>Follow your order in real time from our kitchen to your door.</p>
        </div>
      </section>

      <section className={styles.bubblyIcons}>
        <div className={styles.iconItem}>
          <img
            src="/icons/icon1.svg"
            alt="Fresh Ingredients"
            className={styles.svgIcon}
          />
          <p>Fresh Ingredients</p>
        </div>
        <div className={styles.iconItem}>
          <img
            src="/icons/icon2.svg"
            alt="Fast Delivery"
            className={styles.svgIcon}
          />
          <p>Fast Delivery</p>
        </div>
        <div className={styles.iconItem}>
          <img
            src="/icons/icon3.svg"
            alt="Quality Service"
            className={styles.svgIcon}
          />
          <p>Quality Service</p>
        </div>
        <div className={styles.iconItem}>
          <img
            src="/icons/icon4.svg"
            alt="Great Reviews"
            className={styles.svgIcon}
          />
          <p>Great Reviews</p>
        </div>
      </section>

      <section className={styles.pressSection}>
        <h3>Also seen on</h3>
        <div className={styles.pressLogos}>
          <img
            src="/icons/press1.svg"
            alt="Press 1"
            className={styles.pressLogo}
          />
          <img
            src="/icons/press2.svg"
            alt="Press 2"
            className={styles.pressLogo}
          />
          <img
            src="/icons/press3.svg"
            alt="Press 3"
            className={styles.pressLogo}
          />
        </div>
      </section>

      <section className={styles.testimonials}>
        <h3>What Our Customers Say</h3>
        <div className={styles.testimonialItem}>
          <p>"The best pizza delivery service I have ever used!"</p>
          <span>- Alex</span>
        </div>
        <div className={styles.testimonialItem}>
          <p>"Fast, delicious, and reliable. Highly recommended!"</p>
          <span>- Jamie</span>
        </div>
      </section>

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
