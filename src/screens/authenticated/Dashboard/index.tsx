import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { strings } from 'src/utils/Localization/localizer';
import { clearSession } from 'src/utils/sessionManager';
import MovieListItem from './component/MoviesList';
import { getMovies } from './dataController';
import styles from './styles';
import { MoviesResponseType, MoviesType } from './types';

const Dashboard: FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesType[]>([]);

  useEffect(() => {
    getMovies()
      .then(response => {
        const { results } = response as MoviesResponseType;
        setMoviesList(results);
        console.log('response', results);
      })
      .catch((error: any) => {
        console.log('error', error);
      });
  }, []);
  return (
    <BaseScreen
      scrollEnabled={false}
      style={styles.container}>
      <FlatList
        data={moviesList}
        renderItem={({ item }) => <MovieListItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />

      <Button
        label={strings.dashboard.logout}
        buttonStyle={styles.logoutButton}
        viewStyle={styles.logoutButtonView}
        onPress={() => {
          clearSession();
          // navigation.navigate(SCREENS.Login);
        }}
      />
    </BaseScreen>
  );
};

export default Dashboard;
