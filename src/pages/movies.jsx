import { Searchbar } from 'components/Searchbar/searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'components/API/api';
import MoviesList from 'components/MoviesList/MoviesList';
const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query');
  useEffect(() => {
    const getMoviesList = async () => {
      if (!query) return;
      try {
        const data = await searchMovie(query);
        setMoviesList(data.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMoviesList();
  }, [query]);

  const onHandleSubmit = query => {
    setSearchParam({ query });
  };

  return (
    <>
      <Searchbar handleSubmit={onHandleSubmit} />
      <MoviesList moviesList={moviesList} />
    </>
  );
};
export default Movies;
