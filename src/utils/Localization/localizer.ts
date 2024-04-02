import LocalizedStrings from 'react-native-localization';

import ar from '../../languages/ar.json';
import en from '../../languages/en.json';

export const strings = new LocalizedStrings({
  en,
  ar,
});

export const loadStringsForLanguage = (language: string) => {
  switch (language) {
    case 'en':
      return en;
    case 'ar':
      return ar;
    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }
};
