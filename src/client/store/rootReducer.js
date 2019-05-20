import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';

const reducers = {
  auth: auth.reducers,
  form: formReducer,
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
