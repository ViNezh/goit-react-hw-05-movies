import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'components/API/api';
import { Loader } from 'components/Loader/loader';
import css from './Cast.module.css';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    const getCasts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieCredits(movieId);
        setCasts(data.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCasts();
  }, [movieId]);

  const defaultImg = 'http://dummyimage.com/80.jpg/99cccc&text=No+foto!';

  return (
    <ul>
      {isLoading ? (
        <Loader />
      ) : (
        casts.map(cast => {
          return (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
                width="120px"
                height="160px"
              />
              <p> {cast.name} </p>
              <p> Character: {cast.character} </p>
            </li>
          );
        })
      )}
    </ul>
  );
};
export default Cast;
