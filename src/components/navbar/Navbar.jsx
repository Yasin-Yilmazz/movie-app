import styles from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  return (
    <nav className={styles.navbar}>
      {currentUser ? (
        <>
          <Link to="/" className={styles.movies}>
            Movies
          </Link>
          <li className={styles.navList}>
            <h5 className={styles.movies}>
              Welcome {currentUser.toUpperCase()}{" "}
            </h5>
            <button className={styles.button}>LogOut</button>
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
