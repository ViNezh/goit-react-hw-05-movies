import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'components/API/api';
import DetailsCard from 'components/Details/Details';
import Loader from 'components/Loader/loader';
import { Suspense } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
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
  return (
    <>
      <Link to={backLinkHref.current}>Go back</Link>
      {isLoading && <Loader />}
      {details && <DetailsCard details={details} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
