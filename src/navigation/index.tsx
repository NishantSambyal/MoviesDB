import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { changeLanguageHandler } from 'src/utils/Localization/languageHandler';
import {
  RoutesItem,
  authStackRoutes,
  authenticatedStackRoutes,
} from './utility/screenConstants';
import { RootStackProps } from './utility/types';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackProps>();
  const isLoggedIn = useSelector(
    (state: RootState) => state.userProfileReducer.userInfo,
  );

  const currentLanguage = useSelector(
    (state: RootState) => state.languageReducer.selectedLanguage,
  );
  changeLanguageHandler(currentLanguage);

  const renderHomeStack = () => {
    return (
      <>
        {authenticatedStackRoutes.map((item: RoutesItem<RootStackProps>) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </>
    );
  };
  const renderAuthStack = () => {
    return (
      <>
        {authStackRoutes.map((item: RoutesItem<RootStackProps>) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? renderAuthStack() : renderHomeStack()}
    </Stack.Navigator>
  );
};

export default Route;
