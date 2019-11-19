/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useEffect} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Routes from './src/components/routing/Routes';
import Welcome from './src/screens/Welcome';
import Posts from './src/components/posts/Posts';
import {tokenConfig} from './src/actions/auth';
// redux implimentation
import {store, persistor} from './store';
import {Provider} from 'react-redux';


import {AsyncStorage} from 'react-native';
import {getUser} from './src/actions/auth';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeRouter>
          <Route exact path="/" component={Welcome} />
          <Route component={Routes} />
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
