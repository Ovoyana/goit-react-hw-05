import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import { fetchMoviesBySearchQuery } from "../../movies";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

export default function MoviesPage  ()  {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";
  console.log(queryParam);

  useEffect(() => {
 
    async function fetchOneMoreMovie() {
      try {
        if (queryParam) {
          const { results } = await fetchMoviesBySearchQuery(queryParam);
          setSearchMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchOneMoreMovie();
  }, [queryParam]);

 
 

  function handleSearch (newMovie)  {
    searchParams.set("query", newMovie);
    setSearchParams(searchParams);
    setQuery(newMovie);
}

return (
  <div>
      <SearchForm onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      { <MovieList movies={searchMovies} />}
      </div>
)}
