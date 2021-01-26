import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/intro.module.css';

const Intro = () => {
  return (
    <section className={`${globalStyles['container--fluid']} ${styles.background}`}>
      <div className={styles.intro}>
        <h2 className={styles.intro__title}>Web developer,<br/> JS and CSS enthusiast.</h2>
        <p className={styles.intro__text}>Hello, i'm Arthur and i've been working with web development since 2017! I'm living in Osasco, a city located right after São Paulo.</p>
        <p className={styles.intro__text}>In 2017, i started out working with very basic HTML and CSS, and became a fan of CSS and it's possibilities.</p>
        <p className={styles.intro__text}>The events that followed the later years showed me how challenging and deep web development gets when you start learning JS. But, fortunatelly, for me it only showed that much is achievable through persistence.</p>
      </div>
    </section>
  );
}

export default Intro;