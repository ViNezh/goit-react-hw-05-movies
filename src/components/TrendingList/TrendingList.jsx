import { useState, useEffect } from 'react';
import css from './TrendingList.module.css';
import { fetchTrendingMovies } from 'components/API/api';
import { ListItem } from 'components/ListItem/ListItem';
import Loader from 'components/Loader/loader';

const TrendingList = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoader(true);
        const data = await fetchTrendingMovies();
        setTrendingList(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <ul className={css.list}>
      {isLoader && <Loader />}
      {trendingList.length > 0 &&
        trendingList.map(movie => {
          return <ListItem id={movie.id} title={movie.title} key={movie.id} />;
        })}
    </ul>
  );
};
export default TrendingList;
