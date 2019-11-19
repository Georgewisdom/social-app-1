import React from 'react';
import {Route, Redirect} from 'react-router-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PrivateRoutes = ({
  component: Component,
  auth: {isAuthenticated, processing},
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !processing ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
