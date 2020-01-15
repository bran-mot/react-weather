import { all } from 'redux-saga/effects';
import { watchReuqestWeather } from './weather';

export default function* rootSaga() {
  yield all([watchReuqestWeather()]);
}
