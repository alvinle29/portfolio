import React from 'react'
import {FaBars} from 'react-icons/fa'

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <span className={styles.nav__logo}>
          Bach Le
        </span>
        <label className={styles.nav__toggle} for="check">
          <FaBars className={styles.bar_icon}/>
        </label>

        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header