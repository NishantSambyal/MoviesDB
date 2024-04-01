import Route from '@navigation/index';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          ...DefaultTheme.colors,
          // background: '#fff',
        },
      }}>
      <Route />
    </NavigationContainer>
  );
};

export default App;
