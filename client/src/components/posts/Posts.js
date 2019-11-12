import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PostItem from './PostItem.js';
import {getPosts} from '../../actions/posts';

const Posts = ({getPosts, post: {posts, loading}}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    'loading'
  ) : (
    <View>
      <Fragment>
        <Text>Posts</Text>
        <View>
          <Text>
            {posts.map(post => {
              <PostItem key={post._id} post={post} />;
            })}
          </Text>
        </View>
      </Fragment>
    </View>
  );
};

Posts.PropTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  {getPosts},
)(Posts);
