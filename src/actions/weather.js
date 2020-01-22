export const REQ_WEATHER = 'REQ_WEATHER';
export const WEATHER_REC = 'WEATHER_REC';
export const SWITCH_UNITS = 'SWITCH_UNITS';

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

export const switchUnits = unit => {
  return {
    type: SWITCH_UNITS,
    unit
  };
};
