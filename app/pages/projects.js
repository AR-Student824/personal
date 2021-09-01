import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import projects from './projects.json'
import {useEffect} from "react"
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>projects // AR</title>
        <meta name="description" content="Oh hi there, I&apos;m AR!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Some of my <span className={styles.blue}>projects</span>.
        </h1>
        <center>
          <Link className={styles.card} href="./">Back &rarr;</Link>
          </center>
        <div className={styles.bread}>
        <div className={styles.grid}>
        {projects.map((project, index) => (
          <a href={project.href} key={project.id} className={styles.card}>
            <h2>{project.title} &rarr;</h2>
            <p>{project.desc}</p>
          </a>
        ))}
        </div>
        </div>
      </main>

    </div>
  )
}
