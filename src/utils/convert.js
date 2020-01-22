export function tempConverter(temp, units) {
  if (units === 'metric') {
    return `${Math.round((temp - 273.15) * 10) / 10} \u00B0C`;
  } else if (units === 'imperial') {
    return `${Math.round((temp - 273.15) * (9 / 5) + 32)} \u00B0F`;
  } else {
    return `${temp} \u00B0K`;
  }
}

export function speedConverter(speed, units) {
  if (units === 'imperial') {
    return `${Math.round(((speed / 1.609) * 10) / 10)} mph`;
  }
  return `${speed} km/h`;
}
