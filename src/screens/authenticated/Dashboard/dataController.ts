import { configurableApiRoot } from 'src/network/apiRoute';
import { handleAPICall } from 'src/network/useApiController';
import { ApiProps } from './types';

const getMovies = (config: ApiProps) => {
  return new Promise((resolve, reject) => {
    handleAPICall({
      handleSuccess: (data: any) => {
        resolve(data);
      },
      handleFailure: (error: any) => {
        reject(error);
      },
      route: configurableApiRoot(config).apis.getMoviesList,
    });
  });
};

export { getMovies };
