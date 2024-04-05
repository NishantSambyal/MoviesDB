import BaseScreen from '@components/BaseScreen';
import Button from '@components/Button';
import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { strings } from 'src/utils/Localization/localizer';
import styles from '../styles';
import { DashboardScreenTypes } from '../types';
import MovieListItem from './MoviesList';

const DashboardScreen: FC<DashboardScreenTypes> = ({
  moviesList,
  loading,
  loadMoreData,
  handleLogout,
}) => {
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator style={styles.loadingIndicator} />;
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
        onPress={handleLogout}
      />
    </BaseScreen>
  );
};

export default DashboardScreen;
