import Button from '@components/Button';
import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { strings } from 'src/utils/Localization/localizer';
import { urlConstants } from 'src/utils/urlConstants';
import styles from '../styles';
import { MovieListItemProps } from '../types';

const MovieListItem: FC<MovieListItemProps> = ({ item }) => {
  return (
    <View style={styles.moviesListMainRow}>
      <Image
        source={{ uri: urlConstants.imagePath + item.poster_path }}
        style={styles.moviesListMargin}
      />
      <View style={styles.moviesListDescContainer}>
        <Text style={styles.boldText}>{item.title}</Text>
        <Text>{`${strings.dashboard.popularity} ${item.popularity}`}</Text>
        <Text>{`${strings.dashboard.release_date} ${item.release_date}`}</Text>
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
