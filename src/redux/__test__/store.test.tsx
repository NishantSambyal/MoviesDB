import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import languageReducer from '../slices/languageSlice';
import userProfileReducer from '../slices/userProfileSlice';
import { store } from '../store'; // Import the Redux store

describe('Redux Store Setup', () => {
  test('Redux store should be configured with the correct reducers', async () => {
    // Define persisted reducers
    const persistedReducer = persistReducer(
      {
        key: 'root',
        storage: AsyncStorage,
      },
      combineReducers({
        languageReducer,
        userProfileReducer,
      }),
    );

    // Get the actual state from the store
    const storeState = store.getState();

    // Extract only the state relevant to your reducers
    const expectedState = {
      languageReducer: {
        selectedLanguage: 'en',
      },
      userProfileReducer: {
        userInfo: undefined, // Adjust according to your initial state
      },
      _persist: { version: -1, rehydrated: true },
    };

    // Compare the relevant parts of the actual state with the expected state
    expect(storeState).toEqual(expectedState);
  });
});
