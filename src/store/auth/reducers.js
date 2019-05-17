import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const registerForm = formReducer;

const auth = combineReducers({
  registerForm,
});

export default auth;
