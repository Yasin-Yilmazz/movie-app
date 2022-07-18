import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchNav}>
      <input type="text" placeholder="Search a movie" />
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default SearchBar;
