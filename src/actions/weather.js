export const REQ_WEATHER = 'REQ_WEATHER';
export const WEATHER_REC = 'WEATHER_REC';

export const requestWeather = city => {
  return {
    type: REQ_WEATHER,
    city
  };
};

export const weatherReceived = response => {
  return {
    type: WEATHER_REC,
    response
  };
};
