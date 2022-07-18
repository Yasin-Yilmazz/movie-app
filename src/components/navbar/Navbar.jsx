import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.movies}>
        Movies
      </Link>
      <li className={styles.navList}>
        <Link to="/login" className={styles.button}>
          Login
        </Link>
        <Link to="/register" className={styles.button}>
          Register
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
