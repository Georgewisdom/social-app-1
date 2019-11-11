import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  AUTH_FAILED,
  LOGIN_SUCCESS,
} from './constants';
import {AsyncStorage} from 'react-native';
import authToken from '../utils/authToken';

// Load Current  User
export const getUser = () => async dispatch => {
  if (AsyncStorage.token) {
    authToken(AsyncStorage.token);
  }

  try {
    await fetch('http://192.168.8.103:5000/api/user')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: USER_LOADED,
          payload: data,
        });
      });
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
    });
    console.error('error occured');
  }
};

// Register New User
export const registerUser = ({name, email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({name, email, password});

  try {
    const res = await axios.post('/api/user/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(getUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      throw errors;
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const loginUser = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({email, password});

  try {
    await fetch('http://192.168.8.103:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
        console.log(data);
      });

    dispatch(getUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      throw errors;
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
