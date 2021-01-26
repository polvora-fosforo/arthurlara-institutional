import React from 'react';
import styles from '../../styles/menu.module.css';

function Logo (props) {

  const innerContent = <>
    <span key="logoCapitalOne" className={styles['menu__logo--capital']}>A</span>
      rthur Lar
    <span key="logoCapitalTwo" className={styles['menu__logo--capital']}>a</span>
    <span key="logoSubtitle" className={styles['menu__logo--subtitle']}>Web Developer</span>
  </>;
  
  if(props.mainLogo) {
    return(
      <h1 className={styles.menu__logo}>
        {innerContent}
      </h1>
    );
  }

  return(
    <p className={styles.menu__logo}>
      {innerContent}
    </p>
  );

}

export default Logo;