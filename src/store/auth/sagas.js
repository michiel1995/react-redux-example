import { takeEvery } from 'redux-saga/effects';
import actions from './actions';

const register = function* () {};

const registerSaga = function* () {
  yield takeEvery(actions.uiActionTypes.REGISTER, register);
};

export default [registerSaga];
