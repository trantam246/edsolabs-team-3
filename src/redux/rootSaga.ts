import { all } from 'redux-saga/effects';
import authSaga from './slices/authSaga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
