import { urlConstants } from 'src/utils/urlConstants';
import { apiConstants } from './apiConstants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: urlConstants.authToken,
};

export const callAPI = (method: string, api: string) => {
  const BASE_URL = urlConstants.BASE_URL;

  return fetch(BASE_URL + api, {
    method: method,
    headers,
  });
};

export const ApiRoutes = {
  products: {
    getMoviesList: () => callAPI('GET', apiConstants.moviesList),
  },
};
