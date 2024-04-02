import { ApiRoutes } from 'src/network/apiRoute';
import { handleAPICall } from 'src/network/useApiController';

const getMovies = () => {
  return new Promise((resolve, reject) => {
    handleAPICall({
      handleSuccess: (data: any) => {
        resolve(data);
      },
      handleFailure: (error: any) => {
        reject(error);
      },
      route: ApiRoutes.products.getMoviesList,
    });
  });
};

export { getMovies };
