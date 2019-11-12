import React from 'react';
import {View} from 'react-native';
import {Route, Redirect} from 'react-router-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import { Container } from './styles';

const PrivateRoute = ({
  component: Component,
  auth: {isAuthenticated, loading},
  ...rest
}) => (
  <View>
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  </View>
);

PrivateRoute.PropTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
