import * as ar from '@languages/ar.json';
import * as en from '@languages/en.json';

// Mock react-native-localization module
jest.mock('react-native-localization', () => {
  return {
    default: jest.fn().mockImplementation(() => ({
      en,
      ar,
    })),
  };
});

// Now import the module to be tested
import { loadStringsForLanguage, strings } from './localizer';

describe('Localization', () => {
  test('strings object should be initialized with correct values', () => {
    // Verify that the strings object is initialized with the correct language strings
    expect(strings.getLanguage()).toBe('en'); // Assuming English is the default language
    expect(strings.en).toEqual(en);
    expect(strings.ar).toEqual(ar);
  });

  test('loadStringsForLanguage function should return correct language strings', () => {
    // Test loading English strings
    expect(loadStringsForLanguage('en')).toEqual(en);

    // Test loading Arabic strings
    expect(loadStringsForLanguage('ar')).toEqual(ar);

    // Test loading unsupported language (should log error and return empty object)
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    expect(loadStringsForLanguage('fr')).toEqual({});
    expect(consoleErrorSpy).toHaveBeenCalledWith('Unsupported language: fr');
    consoleErrorSpy.mockRestore(); // Restore console.error to its original implementation
  });
});
