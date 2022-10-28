import { BsPersonFill } from "react-icons/bs"
import { TiLocation } from "react-icons/ti"
import { MdEmail } from "react-icons/md"

import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.info}>
        <h2 className={styles.subtitle}>Get in touch</h2>
        <p className={styles.intro}>
          Let's work together! If you have any further question, please send me
          email to the address below.
        </p>
        <div className={styles.contact__container}>
          <div className={styles.contact__info}>
            <BsPersonFill className={styles.info__symbol} />
            <div>
              <p className={styles.info__title}>Name</p>
              <p>Nguyen Hoang</p>
            </div>
          </div>
          <div className={styles.contact__info}>
            <TiLocation className={styles.info__symbol} />
            <div>
              <p className={styles.info__title}>Address</p>
              <p>Mikkeli, Finland</p>
            </div>
          </div>
          <div className={styles.contact__info}>
            <MdEmail className={styles.info__symbol} />
            <div>
              <p className={styles.info__title}>Email</p>
              <p>n3verland0211@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <h2 className={styles.subtitle}>Message me</h2>
        <form>
          <input
            className={styles.input__control}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className={styles.input__control}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            className={styles.input__control}
            name="comment"
            placeholder="Message..."
          ></textarea>
          <button className={styles.input__control} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact