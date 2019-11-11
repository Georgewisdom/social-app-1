/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component, useEffect} from 'react';

// react navigate

import {NativeRouter, Switch, Route} from 'react-router-native';

import Login from './src/screens/Login';
import Signup from './src/screens/SignUp';
import ForgetPassword from './src/screens/ForgotPassword.js';
import Welcome from './src/screens/Welcome';
import Posts from './src/components/posts';
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
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/forget" component={ForgetPassword} />
        </Switch>
        {/* <Switch>
          <Route extact path="/" component={Posts} />
        </Switch> */}
      </NativeRouter>
    </Provider>
  );
};

export default App;
