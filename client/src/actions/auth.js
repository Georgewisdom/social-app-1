import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './constants';
import {setAlert} from './alert';
import authToken from '../utils/authToken';
import {AsyncStorage} from 'react-native';
// Load Current  User
export const getUser = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      'http://192.168.8.101:5000/api/user',
      tokenConfig(getState),
    );
    console.log('action' + config.headers['x-auth-token']);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    console.log('load user' + res.data);
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
      payload: error,
    });
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
    const res = await axios.post(
      'http://192.168.8.101:5000/api/user/register',
      body,
      config,
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({email, password});
  console.log(body);
  try {
    const res = await axios.post(
      'http://192.168.8.101:5000/api/user/login',
      body,
      config,
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    console.log('login auth' + res.data.token);

    dispatch(getUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-type': 'application/json',
      'x-auth-token': token,
    },
  };

  // Headers

  // If token, add to headers

  console.log(config.headers['x-auth-token'] + 'from tokenConfig');

  return config;
};
