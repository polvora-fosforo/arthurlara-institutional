import React from 'react';
import globalStyles from '../styles/global.module.css';
import styles from '../styles/contact.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className={`${globalStyles.container} ${styles.contact}`}>
      <h2 className={globalStyles.subjectTitle}>Contact</h2>

      <p className={styles.contact__text}>You can reach to me through e-mail, or WhatsApp if you want. Also, you can check my Github and LinkedIn profiles. :)</p>
      <div className={styles.contact__divisions}>

        <div className={styles.contact__division}>
          <ul>
            <li>
              <p className={styles.contact__paragraph}>E-mail: arthur.lara.negocios.01@gmail.com</p>
            </li>
            <li>
              <p className={styles.contact__paragraph}>Cellphone: +55 (11)989353251</p>
            </li>
          </ul>
        </div>
        
        <div className={styles.contact__division}>
          <ul>
            <li>
              <a className={styles.contact__link} href="https://www.linkedin.com/in/arthur-lara-a94384205/" target="_blank">
                <span className={styles['contact__link--icon']}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                https://www.linkedin.com/in/arthur-lara-a94384205/
                <span className={styles['contact__link--icon']}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>
            </li>

            <li>
              <a className={styles.contact__link} href="https://github.com/polvora-fosforo" target="_blank">
                <span className={styles['contact__link--icon']}>
                  <FontAwesomeIcon icon={faGithubSquare} />
                </span>
                https://github.com/polvora-fosforo
                <span className={styles['contact__link--icon']}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <a></a>
    </section>
    
    );
}

export default Contact;