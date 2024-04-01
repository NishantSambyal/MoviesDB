import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ onPress, viewStyle }) => {
  return (
    <View style={viewStyle}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
