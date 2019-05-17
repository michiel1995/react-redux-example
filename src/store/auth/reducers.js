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

const auth = combineReducers({
  isLoading,
});

export default auth;
