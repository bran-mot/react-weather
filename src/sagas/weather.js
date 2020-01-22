import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { REQ_WEATHER, WEATHER_REC } from '../actions/weather';

const url = 'https://api.openweathermap.org/data/2.5';
const apiKey = '670a7a209b018cd7ef7e206f366c5c2a';

export function* watchReuqestWeather(action) {
  yield takeEvery(REQ_WEATHER, fetchWeather);
}

function* fetchWeather(action) {
  const response = yield fetch(
    `${url}/weather?q=${action.city}&appid=${apiKey}`
  );
  const payload = yield response.json();
  yield put({ type: WEATHER_REC, payload });
}
