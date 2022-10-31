import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="keywords" content="nextjs, huntingcoder blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageWrap}>
          {/* <Image className={styles.myImg} src="/homeimg.avif" alt="" width={174} height={116} /> */}
          <img className={styles.myImg} src="/homeimg.avif" alt="hunting coder" width={174} height={116} />
        </div>
        <h1 className={styles.title}>
          <span>&lt;HuntingCoder/&gt;</span>
        </h1>


        <div className="blogs">
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>Javascript is a language used to design logic for wev Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam temporibus eligendi!</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>Javascript is a language used to design logic for wev</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>Javascript is a language used to design logic for wev</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>

    </div>
  )
}
