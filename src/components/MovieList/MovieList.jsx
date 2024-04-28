import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList  ({ gallery }) {
  const location = useLocation();
  return (
    <ul className={css.movie_list}>
      {gallery.map((movie) => {
        return (
          <li key={movie.id} className={css.movie_item}>
            <Link
              to={`/movies/${movie.id}`}
              state={ location }
              className={css.movie_link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
