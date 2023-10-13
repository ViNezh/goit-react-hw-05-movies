import { ListItem } from 'components/ListItem/ListItem';
import css from './MoviesList.module.css';

const MoviesList = ({ moviesList }) => {
  return (
    <ul>
      {moviesList.map(movie => {
        return <ListItem id={movie.id} title={movie.title} key={movie.id} />;
      })}
    </ul>
  );
};
export default MoviesList;
