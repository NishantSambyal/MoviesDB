import Route from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import {
  changeLanguageHandler,
  getSelectedLanguage,
} from 'src/utils/Localization/languageHandler';
import { Colors } from 'src/utils/colors';

const App: FC = () => {
  useEffect(() => {
    getSelectedLanguage().then(lang => {
      if (lang) {
        changeLanguageHandler(lang);
      }
    });
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
