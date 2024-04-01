import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { TextInput as Input, Text } from 'react-native-paper';
import { Colors } from 'src/utils/colors';
import styles from './styles';
import { InputTextProps } from './types';

const TextInput: FC<InputTextProps> = ({
  label,
  maxLength,
  keyboardType,
  secureTextEntry,
  viewStyle,
  onChange,
  error,
  ...props
}) => {
  const [secureTextEntryState, setSecureTextEntryState] =
    useState(secureTextEntry);
  return (
    <View style={viewStyle}>
      <Input
        underlineColor={Colors.transparent}
        placeholderTextColor={Colors.placeholder}
        label={label}
        maxLength={maxLength}
        onChangeText={onChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntryState}
        contentStyle={[styles.input]}
        style={[
          // {
          //   direction: isRtl ? 'rtl' : 'ltr',
          //   textAlign: isRtl ? 'right' : 'left',
          // },
          styles.inputStyle,
        ]}
        {...props}
        right={
          secureTextEntry ? (
            <Input.Icon
              icon={secureTextEntryState ? 'eye' : 'eye-off'}
              onPress={() => {
                setSecureTextEntryState(!secureTextEntryState);
                return false;
              }}
              style={styles.secureTextIcon}
            />
          ) : null
        }
      />
      {error && <Text style={styles.text}>{error}</Text>}
    </View>
  );
};

export default TextInput;
