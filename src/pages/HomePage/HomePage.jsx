import { useState, useEffect } from "react";
import { fetchMovies } from "../../movies";
import css from "../HomePage/HomePage.module.css"

import MovieList from "../../components/MovieList/MovieList";

export default function HomePage  () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { results } = await fetchMovies();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
    <h2 className={css.title}>Trending today</h2>

      <MovieList  movies={movies} />
    </>
  );
};

