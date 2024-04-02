import { apiConstants } from './apiConstants';

var headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDQ3ZGFjOWRmMTk2MzY0MDliYzQ3M2RkN2IwMmY3YyIsInN1YiI6IjYxMDY4OGMzYWQ4N2Y3MDA1ZDkxNWRlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.shteLSRzULpRLXy6y-3Lsb7--SGVmK2hQJ_hqudP_-g',
};

export const callAPI = (method: string, api: string) => {
  const BASE_URL = 'https://api.themoviedb.org';

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
// export const apiService = fetch('API_ENDPOINT', options)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (resJson) {
//     return resJson;
//   });

// export const apiServices = fetch('API_ENDPOINT', options)
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (resJson) {
//     return resJson;
//   });
