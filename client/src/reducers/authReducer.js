import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions/constants';
import {AsyncStorage} from 'react-native';

const initialState = {
  token: AsyncStorage.getItem('@token'),
  isAuthenticated: null,
  processing: true,
  user: null,
  msg: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        processing: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      setValue = async () => {
        try {
          await AsyncStorage.setItem('@token', action.payload.token);
        } catch (e) {
          // save error
          console.log(e);
        }
        console.log('Done.');
      };
      console.log('reducer ' + action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        processing: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      removeValue = async () => {
        try {
          await AsyncStorage.removeItem('@token');
        } catch (e) {
          console.log(e);
        }
      };
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        processing: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        msg: action.payload,
        isAuthenticated: true,
        processing: false,
      };
    default:
      return state;
  }
}
