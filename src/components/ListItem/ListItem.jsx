import css from './ListItem.module.css';
import { Link } from 'react-router-dom';
export const ListItem = ({ id, title }) => {
  return (
    <li className={css.listItem}>
      <Link to={`/movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
