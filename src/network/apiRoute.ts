import { ApiProps } from '@screens/authenticated/Dashboard/types';
import { urlConstants } from 'src/utils/urlConstants';
import { apiConstants, configurableApiRoutes } from './apiConstants';

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

export const configurableApiRoot = (config: ApiProps) => {
  return {
    apis: {
      getMoviesList: () =>
        callAPI('GET', configurableApiRoutes(config.language, config.page)),
    },
  };
};
