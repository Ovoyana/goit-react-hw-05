import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCastById } from "../../movies";
import css from "./MovieCast.module.css";

export default function MovieCast  ()  {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const {cast} = await fetchMovieCastById(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [movieId]);
  return (
    <ul className={css.list}>
      {cast.map((actor) => {
        return (
          <li className={css.item} key={actor.id}>
            {
              <div className={css.about}>
                <img className={css.img}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} photo`}
                />
                <div className={css.info}>
                  <h4 className={css.name}>{actor.name}</h4>
                  <p className={css.character}>{actor.character}</p>
                </div>
              </div>
            }
          </li>
        );
      })}
    </ul>
  );
};