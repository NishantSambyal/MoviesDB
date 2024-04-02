import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { isUserLoggedIn } from 'src/utils/sessionManager';
import {
  RoutesItem,
  authStackRoutes,
  authenticatedStackRoutes,
} from './utility/screenConstants';
import { RootStackProps } from './utility/types';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackProps>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isUserLoggedIn();
      setIsLoggedIn(loggedIn ? true : false);
    };

    // Call the function when component mounts
    checkLoginStatus();

    const intervalId = setInterval(checkLoginStatus, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, []);

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
