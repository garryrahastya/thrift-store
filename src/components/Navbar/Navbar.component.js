import React, { useState } from 'react';



import styles from './Navbar.module.css';
import logo from '../../assets/img/logo2.svg';
import SearchBox from '../SearchBox/SearchBox.component';

function Navbar({ handleSubmit }) {
  // State untuk mengatur visibilitas modal

 

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt='logo' />
      <SearchBox handleSubmit={handleSubmit}/>
    </nav>
  )
}

export default Navbar;
