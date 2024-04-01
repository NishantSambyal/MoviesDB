import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './styles';

const BaseScreen = ({ children }) => {
  return (
    <SafeAreaView style={[styles.container, styles.mainContainer]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>{children}</ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BaseScreen;
