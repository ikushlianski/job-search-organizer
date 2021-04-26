import { combineReducers } from 'redux';
import { userReducer } from '../entities/user/user.slice';

export const rootReducer = combineReducers({
  user: userReducer,
});
