import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Register.module.scss";
import { BiUserPlus } from "react-icons/bi";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <label htmlFor="header">REGISTER</label>
          <BiUserPlus className={styles.userIcon} />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
