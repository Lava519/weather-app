export const fetchOpenWeather = (location) => {
  const key = //INSERT YOUR KEY HERE;
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${key}`;
  return url; 
}

export const geoDB = {
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  options: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': //INSERT YOUR KEY HERE,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    }
}

