import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../actions/constants';
import {AsyncStorage} from 'react-native';

const initialState = {
  token: AsyncStorage.getItem('token'),
  isAuthenticated: null,
  processing: true,
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        processing: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        processing: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        processing: false,
      };
    default:
      return state;
  }
}
