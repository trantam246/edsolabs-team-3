import { takeLatest, put } from '@redux-saga/core/effects';
import { authActions } from './authSlice';
import userApi from 'api/userApi';

function* watchLoginFlow(payload: any) {
  try {
    const getAcc = yield userApi.login(payload.payload);
    localStorage.setItem('access_token', getAcc.access_token);
    yield put(authActions.loginSuccess(''));
  } catch (errr) {
    yield put(authActions.loginFailed(errr));
  }
}
function* register(payload: any) {
  try {
    yield userApi.register(payload.payload);
    yield put(authActions.registerSuccess(''));
  } catch (errr) {
    yield put(authActions.registerFailed(errr));
  }
}
export default function* authSaga() {
  yield takeLatest(authActions.login.type, watchLoginFlow);
  yield takeLatest(authActions.register.type, register);
}
