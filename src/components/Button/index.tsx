import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ disabled, onPress, viewStyle, label }) => {
  return (
    <View style={viewStyle}>
      <TouchableOpacity
        disabled={disabled}
        style={disabled ? styles.disabledContainer : styles.container}
        onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
