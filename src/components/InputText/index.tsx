import React, { FC } from 'react';
import { View } from 'react-native';
import { TextInput as Input, Text } from 'react-native-paper';
import { Colors } from 'src/utils/colors';
import styles from './styles';
import { InputTextProps } from './types';

const TextInput: FC<InputTextProps> = ({
  label,
  maxLength,
  secureTextEntry,
  viewStyle,
  error,
  ...props
}) => {
  return (
    <View style={viewStyle}>
      <Input
        underlineColor={Colors.transparent}
        placeholderTextColor={Colors.placeholder}
        label={label}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        contentStyle={[styles.input]}
        style={styles.inputStyle}
        {...props}
      />
      {error && <Text style={styles.text}>{error}</Text>}
    </View>
  );
};

export default TextInput;
