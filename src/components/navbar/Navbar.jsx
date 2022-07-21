import styles from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logOut } from "../../firebase";
const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      {currentUser ? (
        <>
          <Link to="/" className={styles.movies}>
            Movies
          </Link>
          <li className={styles.navList}>
            <h5>
              Welcome{" "}
              {currentUser.email.substring(0, currentUser.email.indexOf("@"))}
            </h5>
            <button className={styles.button} onClick={() => logOut()}>
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <Link to="/" className={styles.movies}>
            Movies
          </Link>
          <li className={styles.navList}>
            <button
              onClick={() => navigate("/login")}
              className={styles.button}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className={styles.button}
            >
              Register
            </button>
          </li>
        </>
      )}
    </nav>
  );
};

export default Navbar;
