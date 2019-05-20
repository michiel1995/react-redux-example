import { all, fork } from 'redux-saga/effects';
import auth from './auth';

const sagas = [...auth.sagas];
const rootSaga = function* rootSaga() {
  yield all(sagas.map(f => fork(f)));
};

export default rootSaga;
