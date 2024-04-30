import { useState, useEffect } from "react";
import { fetchMovies } from "../../movies";

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
      <MovieList  movies={movies} />
    </>
  );
};

