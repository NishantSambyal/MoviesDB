import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import { urlConstants } from 'src/utils/urlConstants';
import styles from '../styles';
import { MovieListItemProps } from '../types';

const MovieListItem: FC<MovieListItemProps> = ({ item }) => {
  return (
    <View style={styles.moviesListMainRow}>
      <Image
        source={{ uri: urlConstants.imagePath + item.poster_path }}
        style={styles.moviesListMargin}
        resizeMode='cover'
      />
      <Text style={styles.boldText}>{item.title}</Text>

      {/* <View style={styles.moviesListDescContainer}>
        <Text style={styles.boldText}>{item.title}</Text>
      </View> */}
    </View>
  );
};

export default MovieListItem;
