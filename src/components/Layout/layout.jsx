import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css';
import { Loader } from 'components/Loader/loader';
const Layout = () => {
  return (
    <>
      <nav className={css.headerNav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
