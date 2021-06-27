import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import projects from './projects.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AR</title>
        <meta name="description" content="Oh hi there, I'm AR!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.blue}>AR 👋</span>.
        </h1>

        <p className={styles.description}>
          I'm a full stack developer, and the founder of the <a className={styles.blue} href="//blobbyapps.vercel.app">Blobby</a> community &amp; development.
        </p>
        <div className={styles.bread}>
<h3 style={{fontSize: "40px"}}>Best active projects</h3>
        <div className={styles.grid}>
        {projects.map((project, index) => (
          <a href={project.href} className={styles.card}>
            <h2>{project.title} &rarr;</h2>
            <p>{project.desc}</p>
          </a>
        ))}
        </div>
        </div>
        <div className={styles.bread}>
<h3 style={{fontSize: "40px"}}>Socials</h3>
        <div className={styles.grid}>
          <a href="//twitter.com/arcodez" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>@arcodez</p>
          </a>
          <a href="//discord.com/invite/new" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Blobby (discord.gg/new)</p>
          </a>
          <a href="//www.guilded.gg/blob" className={styles.card}>
            <h2>Guilded &rarr;</h2>
            <p>Blobby (www.guilded.gg/blob)</p>
          </a>
          <a href="mailto:arcodez999@gmail.com" className={styles.card}>
            <h2>Email &rarr;</h2>
            <p>arcodez999 at gmail dot com</p>
          </a>
        </div>
        </div>
      </main>

    </div>
  )
}
