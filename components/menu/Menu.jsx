import React, { useEffect, useState } from 'react';
import styles from '../../styles/menu.module.css';
import MenuList from './MenuList';
import Logo from './Logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    checkMenuStatus();
    window.onresize = () => {
      checkMenuStatus();
    }
  });

  const checkMenuStatus = () => {
    if(window.innerWidth < 768 && hiddenMenu === false) {
      setHiddenMenu(true);
    } else if(window.innerWidth >= 768 && hiddenMenu === true) {
      setHiddenMenu(false);
      setOpenMenu(false);
    }
  }

  const renderMenuList = () => {
    if (hiddenMenu) {
      return [
        <div
          key="menuIcon"
          className={styles.menu__icon}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>,
        <MenuList
          key="MenuList"
          openMenu={openMenu}
          setOpenMenu={() => setOpenMenu(!openMenu)}
          hiddenMenu={hiddenMenu}
        />,
      ]
    }

    return <MenuList/>;
  }

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__container}>
        <Logo mainLogo={true} />
        {renderMenuList()}
      </div>
    </nav>
  );
}

export default Menu;