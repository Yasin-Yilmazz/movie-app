import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helpers/ToastNotify";
import styles from "./MovieCard.module.scss";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCardDetail = () => {
    navigate("/detail/" + id);
    !currentUser && toastWarnNotify("Please log in to see details");
    console.log(id);
  };

  return (
    <div className={styles.card_container} onClick={handleCardDetail}>
      <img src={poster_path ? IMG_API + poster_path : defaultImage} alt="" />
      <div className={styles.card}>
        <h5>{title}</h5>
        {currentUser && <span className={styles.tag}>{vote_average}</span>}
      </div>
      <div className={styles.movie_over}>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
