import React from 'react';
import { Link as Anchor } from "react-scroll";
import styles from '../../styles/menu.module.css';
import Logo from './Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function MenuList(props) {

  const showHiddenMenuElements = () => {
    if(props.hiddenMenu) {
      return (
        <>
          <span
          className={styles.menu__close}
            onClick={props.setOpenMenu}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <Logo />
        </>
      );
    }
  }

  return(
    <ul className={`${styles.menu__list} ${props.openMenu && styles["menu__list--opened"]}`}>
      {showHiddenMenuElements()}
      <li className={styles.menu__item}>
        <Anchor
          className={styles.menu__link}
          onClick={props.setOpenMenu}
          to="intro"
          spy={true}
          smooth={true}
          offset={-87}
          duration={500}
        >
          About me
        </Anchor>
      </li>
      <li className={styles.menu__item}>
        <Anchor
          className={styles.menu__link}
          onClick={props.setOpenMenu}
          to="experiences"
          spy={true}
          smooth={true}
          offset={-87}
          duration={500}
        >
          Experiences
        </Anchor>
      </li>
      <li className={styles.menu__item}>
        <Anchor
          className={styles.menu__link}
          onClick={props.setOpenMenu}
          to="myKnowledge"
          spy={true}
          smooth={true}
          offset={-87}
          duration={500}
        >
          My knowledge
        </Anchor>
      </li>
      <li className={styles.menu__item}>
        <Anchor
          className={styles.menu__link}
          onClick={props.setOpenMenu}
          to="thisWebsite"
          spy={true}
          smooth={true}
          offset={-87}
          duration={500}
        >
          This Website
        </Anchor>
      </li>
      <li className={styles.menu__item}>
        <Anchor
          className={styles.menu__link}
          onClick={props.setOpenMenu}
          to="contact"
          spy={true}
          smooth={true}
          offset={-87}
          duration={500}
        >
          Contact
        </Anchor>
      </li>
    </ul>
  );
}

export default MenuList;