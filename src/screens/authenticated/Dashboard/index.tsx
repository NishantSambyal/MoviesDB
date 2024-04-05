import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { strings } from 'src/utils/Localization/localizer';
import { clearSession } from 'src/utils/sessionManager';
import MovieListItem from './component/MoviesList';
import { getMovies } from './dataController';
import styles from './styles';
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
          setMoviesList(prevMoviesList => [...prevMoviesList, ...results]); // Append new data to the existing list
          setPage(page + 1); // Page will be increased by 1 here
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

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator style={styles.loadingIndicator} />; // Show loading indicator at the bottom of the list
  };

  return (
    <BaseScreen
      scrollEnabled={false}
      style={styles.container}>
      <FlatList
        data={moviesList}
        renderItem={({ item }) => <MovieListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />

      <Button
        label={strings.dashboard.logout}
        buttonStyle={styles.logoutButton}
        viewStyle={styles.logoutButtonView}
        onPress={() => {
          clearSession();
        }}
      />
    </BaseScreen>
  );
};

export default Dashboard;
