import {
  createUiAction,
  createApiActions,
  createUiActionType,
  createApiActionTypes,
} from '../helpers';

const uiActionTypes = {
  REGISTER: createUiActionType('AUTH/REGISTER'),
};

const uiActions = {
  register: () => createUiAction(uiActionTypes.REGISTER),
};

const apiActionTypes = {
  REGISTER: createApiActionTypes('AUTH/REGISTER'),
};

const apiActions = {
  register: createApiActions(apiActionTypes.REGISTER),
};
export default {
  uiActionTypes,
  uiActions,
  apiActionTypes,
  apiActions,
};
