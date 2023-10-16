import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/API/api';
import Loader from 'components/Loader/loader';
import css from './Reviews.module.css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  const noReview = "We don't have any reviews for this movie";
  return (
    <ul className={css.reviewList}>
      {isLoading ? (
        <Loader />
      ) : reviews.length === 0 ? (
        <li>{noReview}</li>
      ) : (
        reviews.map(review => {
          return (
            <li key={review.id} className={css.reviewWraper}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};
export default Reviews;
