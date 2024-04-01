import { I18nManager } from 'react-native';
import { LanguageEnum } from '../enums';
import { strings } from './localizer';

export const checkLanguageHandler = async (language: string) => {
  if (language === LanguageEnum.ar) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    strings.setLanguage(LanguageEnum.ar);
  } else {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);

    strings.setLanguage(LanguageEnum.en);
  }
  //   dispatch(selectLanguage(_language));

  //   if (_language === LanguageEnum.ar) {
  //     I18nManager.forceRTL(true);
  //   } else {
  //     I18nManager.forceRTL(false);
  //   }

  //   setTimeout(() => {
  //     RNRestart.restart();
  //   }, 100);
};
