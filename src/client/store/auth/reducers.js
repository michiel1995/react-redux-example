import { combineReducers } from 'redux';
import actions from './actions';

const initialIsLoadingState = false;
const isLoading = (state = initialIsLoadingState, action = {}) => {
  switch (action.type) {
    case actions.uiActionTypes.REGISTER:
      return true;
    case actions.apiActionTypes.REGISTER.SUCCESS:
    case actions.apiActionTypes.REGISTER.FAILURE:
      return false;
    default:
      return state;
  }
};
const initialIsRegisteredState = false;
const isRegistered = (state = initialIsRegisteredState, action = {}) => {
  switch (action.type) {
    case actions.apiActionTypes.REGISTER.SUCCESS:
      return true;
    default:
      return state;
  }
};

const auth = combineReducers({
  isLoading,
  isRegistered,
});

export default auth;
