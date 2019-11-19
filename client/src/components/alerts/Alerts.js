import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const Alert = ({alerts}) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <View key={alert.id} className={`alert alert-${alert.alertType}`}>
      <Text>{alert.msg}</Text>
    </View>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
