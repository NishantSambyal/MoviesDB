import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { LanguageEnum } from '../enums';
import { strings } from './localizer';
// export const checkLanguageHandler = async (language: string) => {
//   const _language =
//     language === LanguageEnum.ar ? LanguageEnum.ar : LanguageEnum.en;
//   if (_language === LanguageEnum.ar) {
//     I18nManager.allowRTL(true);
//     I18nManager.forceRTL(true);
//     strings.setLanguage(_language);
//   } else {
//     I18nManager.allowRTL(false);
//     I18nManager.forceRTL(false);

//     strings.setLanguage(_language);
//   }
//   await selectLanguage(_language);

//   setTimeout(() => {
//     RNRestart.restart();
//   }, 100);
// };
export const changeLanguage = async (language: string) => {
  await selectLanguage(language);

  setTimeout(() => {
    RNRestart.restart();
  }, 100);
};
export const changeLanguageHandler = async () => {
  const _language = await getSelectedLanguage();
  if (_language === LanguageEnum.ar) {
    strings.setLanguage(LanguageEnum.ar);
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else {
    strings.setLanguage(LanguageEnum.en);
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }
};

export const selectLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem('language', language);
  } catch (error) {
    console.log('error while saving', error);
    // Error saving data
  }
};
export const getSelectedLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('language');
    if (value !== null) {
      // We have data!!
      return value;
    }
  } catch (error) {
    console.log('error while retriveing', error);

    // Error retrieving data
  }
};
