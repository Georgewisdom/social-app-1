import {combineReducers} from 'redux';
import authReducer from './authReducer';

const INITIAL_STATE = {};

export default combineReducers({
  auth: authReducer,
});
