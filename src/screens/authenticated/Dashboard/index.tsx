import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { clearSession } from 'src/utils/sessionManager';
import DashboardScreen from './component/DashboardScreen';
import { getMovies } from './dataController';
import { ApiProps, MoviesResponseType, MoviesType } from './types';

const Dashboard: FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const currentLanguage = useSelector(
    (state: RootState) => state.languageReducer.selectedLanguage,
  );

  const config: ApiProps = {
    language: currentLanguage,
    page: page,
  };

  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);
      getMovies(config)
        .then(response => {
          const { results } = response as MoviesResponseType;
          setMoviesList(prevMoviesList => [...prevMoviesList, ...results]);
          setPage(page + 1);
        })
        .catch((error: any) => {
          console.log('error', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    clearSession();
  };

  return (
    <DashboardScreen
      moviesList={moviesList}
      loading={loading}
      loadMoreData={loadMoreData}
      handleLogout={handleLogout}
    />
  );
};

export default Dashboard;
