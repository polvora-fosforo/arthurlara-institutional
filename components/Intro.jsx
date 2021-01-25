import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/intro.module.css';

const Intro = () => {
  return (
    <section className={`${globalStyles['container--fluid']} ${styles.background}`}></section>
  );
}

export default Intro;