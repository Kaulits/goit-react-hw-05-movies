import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '55bf1437dcf6c64afa48c0b7791cdbe4';

export const fetchTrending = async () => {
  const { data } = await axios.get('trending/all/day', {
    params: {
      api_key: `${API_KEY}`,
    },
  });

  return data.results;
};


export const fetchMovies = async query => {
  const { data } = await axios.get('search/movie', {
    params: {
      include_adult: false,
      language: 'en-US',
      page: 1,
      api_key: `${API_KEY}`,
      query: `${query}`,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchActors = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: `${API_KEY}`,
      language: 'en-US',
    },
  });
  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
      page: 1,
      api_key: `${API_KEY}`,
    },
  });
  return data.results;
};