import React from 'react';
import styles from '../../styles/menu.module.css';

function Logo (props) {
  
  if(props.mainLogo) {
    return(
      <h1 className={styles.menu__logo}>
        Arthur Lara
        <span className={styles['menu__logo--subtitle']}>Web Developer</span>
      </h1>
    );
  }

  return(
    <p className={styles.menu__logo}>
      Arthur Lara
      <span className={styles['menu__logo--subtitle']}>Web Developer</span>
    </p>
  );

}

export default Logo;