import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { strings } from './Localization/localizer';

const SESSION_KEY = 'session';
export const userLoggedIn = async (username: string) => {
  try {
    await AsyncStorage.setItem(SESSION_KEY, username);
  } catch (error) {
    console.log('error while saving', error);
    // Error saving data
  }
};
export const isUserLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem(SESSION_KEY);
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const clearSession = async () => {
  Alert.alert(strings.dashboard.logout, strings.dashboard.logout_msg, [
    {
      text: strings.general.cancel,
      style: 'cancel',
    },
    {
      text: strings.general.yes,
      onPress: async () => {
        try {
          await AsyncStorage.removeItem(SESSION_KEY);
        } catch (error) {
          console.log('error while removing', error);
          // Error saving data
        }
      },
    },
  ]);
};
