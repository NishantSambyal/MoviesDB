import Route from '@navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { changeLanguageHandler } from 'src/utils/Localization/languageHandler';
import { Colors } from 'src/utils/colors';

const App: FC = () => {
  useEffect(() => {
    changeLanguageHandler().then(() => console.log('language setted'));
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
    },
  };

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Route />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
