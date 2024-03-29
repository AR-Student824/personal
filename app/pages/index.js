import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import projects from './projects.json'
import {useEffect} from "react"
import Link from 'next/link'

export default function Home() {

  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/314903667574702080?bg=ffffff00').then(response => response.json())
    .then(data => {
      data.data.activities.forEach(activity => {
        if (activity.id == "custom") {
          document.getElementById('customStatus').innerText = activity.state
          document.getElementById('desc').innerHTML = document.getElementById('desc').innerHTML + '<br /><br />'  +activity.state
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
        <title>home // AR</title>
        <meta name="description" content="Oh hi there, I&apos;m AR!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.blue}>Asad 👋</span>.
        </h1>

        <p className={styles.description} id="desc">
          I&apos;m a full stack developer, and the founder of the <a className={styles.blue} href="//www.blobby.me">Blobby</a> community &amp; development.
          <br />
          You can find my new blog <a className={styles.blue} href="//blog.ar-dev.cf">here</a>. I sometimes write there.
        </p>
        <center>
        <br /><br />
          <Link href="/projects"><a className={styles.card}>Projects &rarr;</a></Link>
          <br /><br /><br />
          </center>
        <div className={styles.discordcardcontainer}>
          <iframe id="card" width="410px" height="218px" className={styles.discordcard} src="https://lanyard-profile-readme.vercel.app/api/314903667574702080" />
          <br /><br /><br />
          <center>
          <a className={styles.card} href="https://discord.com/users/314903667574702080">View on Discord &rarr;</a>
          </center>
          <br /><br />
        </div>
        <div className={styles.discordcardcontainer}>
          <iframe width="495px" height="218px" className={styles.discordcard} src="https://github-readme-stats.vercel.app/api?username=AR-Student824&theme=radical&show_icons=true" />
          <center><p>These stats are currently inaccurate, click the button below</p></center>
          <br /><br /><br />
          <center>
          
          <a className={styles.card} href="https://github.com/AR-Student824">View on Github &rarr;</a>
          </center>
          <br /><br />
        </div>
        <div className={styles.bread}>
<h3 style={{fontSize: "40px"}}>Projects</h3>
<p>Moved <Link href="/projects"><a className={styles.blue}>here</a></Link> due to the list only increasing.</p>
</div>
        <div className={styles.bread}>
<h3 style={{fontSize: "40px"}}>Find me on...</h3>
        <div className={styles.grid}>
          <a href="//twitter.com/arcodez" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>@arcodez<br />
            <i>A good but not the best way to contact me.</i></p>
          </a>
          <a href="//discord.com/invite/windows" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Server: Blobby (discord.gg/windows)
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
            <i>I changed my email from Gmail to Protonmail recently.</i>
            <p>arcodez at protonmail dot net<br />
            Email active: Yes
            </p>
          </a>
          <a href="https://github.com/AR-Student824" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Github: AR-Student824<br />Check out my Github to see what I&apos;m up to, I&apos;m most active on there.
            </p>
          </a>
        </div>
        </div>
      </main>

    </div>
  )
}
