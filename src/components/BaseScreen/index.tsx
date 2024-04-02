import React, { FC, Fragment } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import styles from './styles';
import { BaseScreenProps } from './types';

const BaseScreen: FC<BaseScreenProps> = ({
  children,
  scrollEnabled = true,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, styles.mainContainer]}>
      <View style={[style, { flex: 1 }]}>
        {scrollEnabled ? (
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>{children}</ScrollView>
          </KeyboardAvoidingView>
        ) : (
          <Fragment>{children}</Fragment>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BaseScreen;
