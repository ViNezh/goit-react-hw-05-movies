// import Home from 'pages/home';
// import Movies from 'pages/movies';
// import MovieDetails from 'pages/moviesDetails';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('../pages/moviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
