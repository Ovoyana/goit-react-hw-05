import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";



export default function MovieList  ({ movies }) {
  const location = useLocation();
  return (
    <ol className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Link
              to={`/movies/${movie.id.toString()}`}
              state={{ from: location }}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        );
       })}
    </ol>
  );
};
