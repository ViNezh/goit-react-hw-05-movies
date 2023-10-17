import css from './ListItem.module.css';
import { Link, useLocation } from 'react-router-dom';
export const ListItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <li className={css.listItem}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
