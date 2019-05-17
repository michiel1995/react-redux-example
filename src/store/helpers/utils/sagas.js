import { put, call } from 'redux-saga/effects';

export const apiSagaWrapper = (apiAction, apiFn, args) => function* () {
  yield put(apiAction.request(args));
  const { response, error } = yield call(apiFn, args);
  if (response) {
    yield put(apiAction.success(args, response));
  } else {
    yield put(apiAction.failure(args, error));
  }
  return response;
};
