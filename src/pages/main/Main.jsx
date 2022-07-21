import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../../components/moviecard/MovieCard";
import styles from "./Main.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const Main = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && currentUser) {
      getMovies(SEARCH_API + search);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };

  return (
    <div>
      <form className={styles.searchNav} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a movie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <div className={styles.main_container}>
        {loading ? (
          <div className={styles.loading}>
            <h1>LOADING...</h1>
          </div>
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
};

export default Main;
