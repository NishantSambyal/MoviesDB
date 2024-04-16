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
  testID,
}) => {
  return (
    <SafeAreaView
      style={[styles.container, styles.mainContainer]}
      testID={testID}>
      <View style={[style, styles.container]}>
        {scrollEnabled ? (
          <KeyboardAvoidingView
            style={styles.container}
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
