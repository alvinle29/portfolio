import React from 'react'
import {FaBlogger, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import styles from './Home.module.css'

const Home = () => {
  return (
    <section>
      <div className={styles.home} id="home">
        <div className={styles.intro__container}>
          <div className={styles.dots__container}>
            <div className={styles.dot__yellow}></div>
            <div className={styles.dot__green}></div>
            <div className={styles.dot__red}></div>
          </div>

          <div className={styles.content__container}>
            <div className={styles.description}>
              <h1>
                Hi, I'm <br />
                <span className={styles.name}>Bach Le</span> <br />
                Full-Stack/ Mobile Developer
              </h1>
              <a href="#contact">Contact Me</a>
            </div>
            <div className={styles.media__container}>
              <div className={styles.profile__picture}>
                <div className={styles.profile__picture__bg}></div>
              </div>
              <div className={styles.social__container}>
                <a href="https://www.linkedin.com/in/bach-l-298105138/">
                  <FaLinkedinIn className={styles.LinkedIn} />
                </a>
                <a href="https://github.com/alvinle29">
                  <FaGithub className={styles.GitHub} />
                </a>
                <a href="https://www.instagram.com/eodin.le_/">
                  <FaInstagram className={styles.Instagram} />
                </a>
                <a href="https://www.alvinle.site/">
                  <FaBlogger className={styles.Blogger} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home