import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import projects from './projects.json'
import {useEffect} from "react"

export default function Home() {

  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/314903667574702080?bg=ffffff00').then(response => response.json())
    .then(data => {
      data.data.activities.forEach(activity => {
        if (activity.id == "custom") {
          document.getElementById('customStatus').innerText = activity.state
        }
      })
      
      document.getElementById('card').style.cursor = "pointer"
      document.getElementById('userData').innerHTML = `${data.data.discord_user.username}#${data.data.discord_user.discriminator}`
      document.getElementById('status').innerHTML = `${data.data.discord_status.replace('online', 'Active').replace('dnd', 'Do Not Disturb').replace('idle', 'Idle').replace('offline', 'Offline')}`
    })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>AR</title>
        <meta name="description" content="Oh hi there, I&apos;m AR!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.blue}>AR 👋</span>.
        </h1>

        <p className={styles.description}>
          I&apos;m a full stack developer, and the founder of the <a className={styles.blue} href="//blobbyapps.vercel.app">Blobby</a> community &amp; development.
        </p>
        <div className={styles.grid}>
        <div className={styles.discordcardcontainer}>
          <iframe id="card" width="410px" height="218px" className={styles.discordcard} src="https://lanyard-profile-readme.vercel.app/api/314903667574702080" />
          <br /><br /><br />
          <center>
          <a className={styles.card} href="https://discord.com/users/314903667574702080">View on Discord &rarr;</a>
          </center>
          <br /><br />
        </div>
        <div className={styles.discordcardcontainer}>
          <iframe width="420px" height="218px" className={styles.discordcard} src="https://github-readme-stats.vercel.app/api?username=AR-Student824&theme=radical&show_icons=true" />
          <br /><br /><br />
          <center>
          <a className={styles.card} href="https://github.com/AR-Student824">View on Github &rarr;</a>
          </center>
          <br /><br />
        </div>
        </div>
        <div className={styles.bread}>
<h3 style={{fontSize: "40px"}}>Best active projects</h3>
        <div className={styles.grid}>
        {projects.map((project, index) => (
          <a href={project.href} key={project.id} className={styles.card}>
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
            <p>@arcodez<br />
            <i>I no longer post on Twitter due to the toxicity</i></p>
          </a>
          <a href="//discord.com/invite/new" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Server: Blobby (discord.gg/new)
              <br />
              User: <span id="userData">N/A</span>
              <br />
              Status: <span id="status">N/A</span>
              <br />
              Custom status: <span id="customStatus">N/A</span>
            </p>
          </a>
          <a href="//www.guilded.gg/blob" className={styles.card}>
            <h2>Guilded &rarr;</h2>
            <p>Server: Blobby (www.guilded.gg/blob)</p>
          </a>
          <a href="mailto:arcodez999@gmail.com" className={styles.card}>
            <h2>Email &rarr;</h2>
            <p>arcodez999 at gmail dot com<br />
            Email active: Yes
            </p>
          </a>
          <a href="https://github.com/AR-Student824" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Github: AR-Student824<br />Check out my Github to see what I&apos;m up to.
            </p>
          </a>
        </div>
        </div>
      </main>

    </div>
  )
}
