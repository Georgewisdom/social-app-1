import {combineReducers} from 'redux';
import authReducer from './authReducer';
import posts from './posts';

export default combineReducers({
  auth: authReducer,
  post: posts,
});
