import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/my-knowledges.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'

function MyKnowledge() {
  return(
    <section id="myknowledge" className={`${globalStyles['container--fluid']} ${styles.background}`}>
      <h2 className={`${globalStyles.subjectTitle} ${globalStyles['subjectTitle--alternate']}`}>My knowledge</h2>
      <div className={`${styles.knowledges} ${globalStyles.container}`}>

        <div className={styles.knowledge}>
          <div className={styles.knowledge__icon}>
            <FontAwesomeIcon icon={faJsSquare} />
          </div>
          <h3 className={styles.knowledge__title}>JavaScript</h3>
          <ul>
            <li className={styles.knowledge__item}>Modern JavaScript (good ECMAScript specifications)</li>
            <li className={styles.knowledge__item}>Frameworks such as React and Next.js</li>
            <li className={styles.knowledge__item}>Bulding basic Node.js API for backend</li>
          </ul>
        </div>

        <div className={styles.knowledge}>
          <div className={styles.knowledge__icon}>
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <h3 className={styles.knowledge__title}>CSS</h3>
          <ul>
            <li className={styles.knowledge__item}>BEM methodology</li>
            <li className={styles.knowledge__item}>CSS preprocessors like Less and Sass</li>
            <li className={styles.knowledge__item}>CSS Modules</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default MyKnowledge;