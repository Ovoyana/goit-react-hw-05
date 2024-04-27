import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { fetchMoviesBySearchQuery } from "../../movies";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

export default function MoviesPage  ()  {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";
  console.log(queryParam);

  useEffect(() => {
    async function getData() {
      try {
        if (queryParam) {
          const { results } = await fetchMoviesBySearchQuery(queryParam);
          setSearchMovies(results);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, [queryParam]);

  const initialValues = {
    query: "",
  };

  function handleSubmit(data, option) {
    if (!data.query.trim()) return;
    setQuery(data.query);
    setSearchParams({ query: data.query });
    option.resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.field}
            name="query"
            type="text"
            placeholder="search movie"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <MovieList moviesList={searchMovies} />
    </>
  );
};

