// __mocks__/react-native-localization.js

import ar from '../src/languages/ar.json'; // Adjust the path as needed
import en from '../src/languages/en.json'; // Adjust the path as needed

const LocalizedStringsMock = jest.fn().mockImplementation(strings => {
  return {
    ...strings,
    setLanguage: jest.fn(),
    getLanguage: jest.fn(),
    formatString: jest.fn(),
  };
});

const strings = {
  en,
  ar,
};

export default LocalizedStringsMock;
export { strings };
