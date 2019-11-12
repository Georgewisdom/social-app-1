import React, {Fragment} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Link} from 'react-router-native';
import PropTypes from 'prop-types';
// import { Container } from './styles';

const PostItem = ({auth, post: {body, user, createdAt, likeCount}}) => {
  user ===
    auth.user._id(
      <View>
        <View>
          <Text>Post Title</Text>
          <Text>{createdAt}</Text>
          <View>
            <Text>{body}</Text>
          </View>

          <Text>{likeCount}</Text>
        </View>
      </View>,
    );
};

export default connect()(PostItem);
