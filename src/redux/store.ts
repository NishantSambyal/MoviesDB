import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import languageReducer from './slices/languageSlice';
import userProfileReducer from './slices/userProfileSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   whitelist: ['language'],
};

const rootReducer = combineReducers({
  languageReducer,
  userProfileReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: NodeRequire[] = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = configureStore({
  reducer: persistedReducer,
  //   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  middleware: getDefaultMiddleware => {
    const middlewareDefault = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });

    return [...middlewareDefault, ...middleware];
  },
});
const persistor = persistStore(store);
export { persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
