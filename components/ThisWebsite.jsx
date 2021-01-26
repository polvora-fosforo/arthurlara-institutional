import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/this-website.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ThisWebsite = () => {
  return (
    <section id="thisWebsite" className={`${globalStyles['container--fluid']} ${styles.background}`}>
      <h2 className={`${globalStyles.subjectTitle} ${globalStyles['subjectTitle--alternate']}`}>This website</h2>

      <div className={`${globalStyles.container} ${styles.repo}`}>
        <p>This website was built using the framework Next.js and stylized using css modules. You can check the repository for this at:</p>
        <a className={styles.repo__link} href="https://github.com/polvora-fosforo/arthurlara-institutional" target="_blank">
          https://github.com/polvora-fosforo/arthurlara-institutional
          <span className={styles['repo__link--external']}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>
      </div>

    </section>
  );
}

export default ThisWebsite;