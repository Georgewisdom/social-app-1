import React from 'react';
import {View} from 'react-native';
import PrivateRoute from './PrivateRoute';
import Posts from '../posts/Posts';
// import { Container } from './styles';

const Routes = () => {
  return (
    <View>
      <Switch>
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <PrivateRoute exact path="/posts" component={Posts} />
      </Switch>
    </View>
  );
};

export default Routes;
