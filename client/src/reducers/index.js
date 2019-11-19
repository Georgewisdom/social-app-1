import {combineReducers} from 'redux';
import authReducer from './authReducer';
import posts from './posts';
import alerts from './alert';

export default combineReducers({
  auth: authReducer,
  post: posts,
  alert: alerts,
});
