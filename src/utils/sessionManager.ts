import AsyncStorage from '@react-native-async-storage/async-storage';

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
  try {
    await AsyncStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.log('error while removing', error);
    // Error saving data
  }
};
