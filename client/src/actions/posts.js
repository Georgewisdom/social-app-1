import axios from 'axios';

import {GET_POSTS, POST_ERROR} from './constants';

// Get Post
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('http://192.168.8.103:5000/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: error.message},
    });
  }
};
