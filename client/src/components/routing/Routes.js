import React from 'react';
import {View} from 'react-native';
import {Route, Link} from 'react-router-native';
import PrivateRoutes from './PrivateRoutes';
// components
import Login from '../../screens/Login';
import SignUp from '../../screens/SignUp';
import ForgotPassword from '../../screens/ForgotPassword';
import Posts from '../posts/Posts';

const Routes = () => {
  return (
    <View>
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forget" component={ForgotPassword} />
      <PrivateRoutes exact path="/posts" component={Posts} />
    </View>
  );
};

export default Routes;
