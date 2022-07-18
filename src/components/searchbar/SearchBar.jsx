import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ getData }) => {
  const handleSearch = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.searchNav}>
      <input onChange={handleSearch} type="text" placeholder="Search a movie" />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
