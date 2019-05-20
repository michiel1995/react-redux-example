import { takeEvery, call, select } from 'redux-saga/effects';
import { getFormValues } from 'redux-form';
import actions from './actions';
import { apiSagaWrapper } from '../helpers';
import { register as registerApiCall } from './api';
import constants from './constants';

const register = function* () {
  console.log('refd');
  const registerValues = yield select(getFormValues(constants.registerFormKey));
  yield call(apiSagaWrapper(actions.apiActions.register, registerApiCall, registerValues));
};

const registerSaga = function* () {
  yield takeEvery(actions.uiActionTypes.REGISTER, register);
};

export default [registerSaga];
