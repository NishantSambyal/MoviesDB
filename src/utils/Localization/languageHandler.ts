import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { AnyAction, Dispatch } from 'redux';
import { changeLanguage as changeLanguageAction } from 'src/redux/slices/languageSlice';
import { LanguageEnum } from '../enums';
import { strings } from './localizer';

export const changeLanguage = async (
  language: LanguageEnum,
  dispatch: Dispatch<AnyAction>,
) => {
  dispatch(changeLanguageAction(language));

  if (language === LanguageEnum.ar) {
    I18nManager.forceRTL(true);
    strings.setLanguage(LanguageEnum.ar);
  } else {
    I18nManager.forceRTL(false);
    strings.setLanguage(LanguageEnum.en);
  }

  setTimeout(() => {
    RNRestart.restart();
  }, 10);
};
export const changeLanguageHandler = (language: string) => {
  if (language === LanguageEnum.ar) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    strings.setLanguage(LanguageEnum.ar);
  } else {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    strings.setLanguage(LanguageEnum.en);
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
    console.log('error while retrieving', error);

    // Error retrieving data
  }
};
