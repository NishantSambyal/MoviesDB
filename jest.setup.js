/* eslint-disable no-undef */
import mockRNLocalization from './__mocks__/react-native-localization-mock';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native-localization', () => mockRNLocalization);
