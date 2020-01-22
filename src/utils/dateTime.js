export function getDateString(timestamp, units) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const date = new Date(timestamp * 1000);
  if (units === 'metric') {
    return date.toLocaleDateString('en-GB', options);
  }
  return date.toLocaleDateString('en-US', options);
}
