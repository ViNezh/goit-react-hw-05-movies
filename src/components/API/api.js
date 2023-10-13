import axios from 'axios';

const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2E5OThkNzEwNGE4YzU1MTE2YTNhMGZlNmI1ZTcwMyIsInN1YiI6IjY1MjNjM2I3MDcyMTY2NDViNmQ5YTBmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qnPTaEWYBN4zcIKafg-n-3TDQZFlldCqyLGijAdOKLg';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'en-US' },
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await axiosInstance.get('/trending/movie/day');
  return data;
};

export const searchMovie = query => {
  return axiosInstance.get('/search/movie', {
    params: {
      query,
      include_adult: 'false',
      page: 1,
    },
  });
};

export const fetchMovieDetails = movieId => {
  return axiosInstance.get(`/movie/${movieId}`);
};

export const fetchMovieCredits = movieId => {
  return axiosInstance.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = movieId => {
  return axiosInstance.get(`/movie/${movieId}/reviews`);
};
