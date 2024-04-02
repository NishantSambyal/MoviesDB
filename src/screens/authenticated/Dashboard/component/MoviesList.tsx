import Button from '@components/Button';
import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { strings } from 'src/utils/Localization/localizer';
import styles from '../styles';
import { MovieListItemProps } from '../types';

const MovieListItem: FC<MovieListItemProps> = ({ item }) => {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
      <Image
        source={{ uri: 'https://image.tmdb.org/t/p/w200' + item.poster_path }}
        style={{ width: 80, height: 80, marginRight: 20 }}
      />
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Text>Popularity: {item.popularity}</Text>
        <Text>Released Date: {item.release_date}</Text>
        <Button
          label={strings.dashboard.view_details}
          buttonStyle={styles.moreDetailButton}
          buttonTextStyle={styles.moreDetailText}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default MovieListItem;
