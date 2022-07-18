import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.movies}>Movies</span>
      <li className={styles.navList}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Register</button>
      </li>
    </nav>
  );
};

export default Navbar;
