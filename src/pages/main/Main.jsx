import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../../components/moviecard/MovieCard";

const Main = () => {
  const [configuration, setConfiguration] = useState("");
  const [id, setId] = useState("");
  const API_KEY = "85f2070e3d77b87af191bea79063ad03";
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const testUrl = `https://api.themoviedb.org/3/movie/550?api_key=85f2070e3d77b87af191bea79063ad03`;
  const getData = async () => {
    try {
      const { data } = await axios.get(testUrl);
      console.log(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <SearchBar getData={getData} />
      <MovieCard />
    </div>
  );
};

export default Main;
