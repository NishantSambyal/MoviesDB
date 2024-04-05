import Route from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/redux/store';
import { Colors } from 'src/utils/colors';

const App: FC = () => {
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
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Route />
          </PersistGate>
        </Provider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
