import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Login.module.scss";
// import userIcon from "../../assets/userIcon.png";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <label htmlFor="header">USER LOGIN</label>
          <FaUserAlt className={styles.userIcon} />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={styles.button}>
            Log In
          </button>
          <button type="submit" className={styles.googleButton}>
            GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
