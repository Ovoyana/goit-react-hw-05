import { useEffect, useState, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../movies";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage () {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const goBackURLRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      <Link className={css.btn} to={goBackURLRef.current}>
        Go Back
      </Link>
      <div className={css.box}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`preview of ${movie.title}`}
          className={css.movie_img}
        />
        <div className={css.info_box}>
          <h2 className={css.info_title}>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>

          <div>
            <h3 className={css.overview_title}>Overview</h3>
            <p className={css.overview_text}>{movie.overview}</p>
          </div>
          <div>
            <h3 className={css.genres_title}>Genres</h3>
            <ul className={css.list}>
              {movie.genres?.map((genre) => {
                return (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={css.additional_info}>
        <h3 className={css.add_title}>Additional information</h3>
        <ul className={css.add_list}>
          <li className={css.add_item}>
            <Link className={css.add_link} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.add_item}>
            <Link className={css.add_link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

