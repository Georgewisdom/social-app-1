import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './src/reducers';

import {AsyncStorage} from 'react-native';
const middleware = [thunk];
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['auth', 'post'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware, createLogger()),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {store, persistor};
