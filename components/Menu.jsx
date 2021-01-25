import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/menu.module.css';
import { Link as Anchor } from "react-scroll";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={`${globalStyles.container} ${styles.menu__container}`}>
        <h1 className={styles.menu__logo}>
          Arthur Lara
          <span className={styles['menu__logo--subtitle']}>Web Developer</span>
        </h1>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>About me</li>
          <li className={styles.menu__item}>
            <Anchor
              to="experiences"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experiences
            </Anchor>
          </li>
          <li className={styles.menu__item}>This Website</li>
          <li className={styles.menu__item}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;