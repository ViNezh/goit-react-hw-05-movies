import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'components/API/api';
import DetailsCard from 'components/Details/Details';
import { Loader } from 'components/Loader/loader';

const MovieDetails = () => {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const backLinkHref = useRef(location.state?.from ?? '/');
  useEffect(() => {
    if (!movieId) return;
    const fetchDetails = async () => {
      try {
        setIsLoading(true);

        const responce = await fetchMovieDetails(movieId);
        setDetails(responce.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);
  console.log(backLinkHref.current);
  console.log(location.state);
  return (
    <>
      <Link to={backLinkHref.current}>Go back</Link>
      {isLoading && <Loader />}
      {details !== null && (
        <DetailsCard
          poster={details.poster_path}
          title={details.title}
          release={details.release_date}
          score={details.vote_average}
          overview={details.overview}
          genres={details.genres}
        />
      )}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
