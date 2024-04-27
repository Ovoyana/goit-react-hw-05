import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewById } from "../../movies";
import css from "./MovieReviews.module.css";

export default function MovieReviews  ()  {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { results } = await fetchMovieReviewById(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={css.reviews_list}>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        "There are no reviews yet for this movie"
      )}
    </div>
  );
};

