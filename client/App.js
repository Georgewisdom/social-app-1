/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useEffect} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import Welcome from './src/screens/Welcome';
import Routes from './src/components/routing/Routes';
// redux implimentation
import store from './store';
import {Provider} from 'react-redux';
import authToken from './src/utils/authToken';
import {AsyncStorage} from 'react-native';
import {getUser} from './src/actions/auth';

// check auth status
if (AsyncStorage.token) {
  authToken(AsyncStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(getUser);
  }, []);

  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={Welcome} />
        <Route component={Routes} />
      </NativeRouter>
    </Provider>
  );
};

export default App;
