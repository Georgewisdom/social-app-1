import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-native';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
const PostItem = ({auth, post: {user, body, likeCount}}) => (
  <View style={{padding: 12, backgroundColor: 'grey', marginBottom: 5}}>
    <View>
      <Text>{body}</Text>
      <Text>{likeCount}</Text>
    </View>
  </View>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PostItem);
