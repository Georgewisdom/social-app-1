import {GET_POSTS, POST_ERROR} from './constants';
import axios from 'axios';
import {tokenConfig} from './auth';
import {setAlert} from './alert';
// get all posts
export const getPosts = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      'http://192.168.8.101:5000/api/posts',
      tokenConfig(getState),
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: error.response, status: error.response.status},
    });
  }
};
