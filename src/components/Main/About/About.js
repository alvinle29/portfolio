import styles from "./About.module.css"

const About = () => {
    return (
    <section className={styles.about} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.about__container}>
        <div className={styles.left__column}>
          <div className={styles.about__picture}></div>
        </div>
        <div className={styles.right__column}>
          <p className={styles.statement}>
            A hardworking, motivated student with a strong background in front
            end development. I am a third year IT student studying in
            South-Eastern Finland University of Applied Sciences, and I am
            looking for opportunities to gain more experience as a developer.
          </p>
          <h2 className={styles.subtitle}>Tech Stacks</h2>
          <p>
            A front end developer with primary focus on React:{" "}
            <a target="_blank" href="">
              Download Resume
            </a>
          </p>
          <div className={styles.tech__container}>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Redux</li>
            </ul>

            <ul>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>SQL Server</li>
              <li>C#/Unity</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About