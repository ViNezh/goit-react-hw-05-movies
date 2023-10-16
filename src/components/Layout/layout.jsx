import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css';
import Loader from 'components/Loader/loader';
const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.headerNav}>
          <NavLink
            className={({ isActive }) =>
              `${css['headerLink']} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
