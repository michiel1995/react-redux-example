import { combineReducers } from 'redux';
import auth from './auth';

const reducers = {
  auth: auth.reducers,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
