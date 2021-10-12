import { delay, takeLatest, put } from '@redux-saga/core/effects';
import { authActions } from './authSlice';
import userApi from 'api/userApi';

function* watchLoginFlow(payload: any) {
  yield delay(500);
  try {
    const getAcc = yield userApi.login(payload.payload);
    localStorage.setItem('access_token', getAcc.access_token);
    const getNameAcc = yield userApi.getNameAcc(getAcc.access_token);
    console.log(getNameAcc);
  } catch (errr) {
    yield put(authActions.loginFailed(errr));
  }
}
export default function* authSaga() {
  yield takeLatest(authActions.login.type, watchLoginFlow);
}
