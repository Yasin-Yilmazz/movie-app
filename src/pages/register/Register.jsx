import React, { useState } from "react";
import styles from "./Register.module.scss";
import { BiUserPlus } from "react-icons/bi";
import { createUser } from "../../firebase";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
  };

  return (
    <div>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="header">REGISTER</label>
          <BiUserPlus className={styles.userIcon} />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
