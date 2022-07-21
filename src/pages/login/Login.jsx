import React, { useState } from "react";
import styles from "./Login.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { signIn, signInWithGoogle } from "../../firebase";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(navigate);
  };

  return (
    <div>
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="header">USER LOGIN</label>
          <FaUserAlt className={styles.userIcon} />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Login;
