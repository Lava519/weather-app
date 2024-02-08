import { useState } from 'react'
import { fetchOpenWeather } from './api.js'
import Search from './components/search/Search'
import Current from './components/current/Current'
import Forecast from './components/forecast/Forecast'
import './App.css'

function App() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [celsius, setCelsius] = useState(true);
  function forecastSetup(f) {
    let forecastDivided = new Array(6);
    for (let i = 0; i < forecastDivided.length; i++)
      forecastDivided[i] = [];
    let day = 0;
    for (let i = 0; i < f.length; i++) {
      if (f[i].dt_txt.slice( -8, -6 ) == "21") {
        forecastDivided[day].push(f[i]);
        day++;
      }else {
        forecastDivided[day].push(f[i]);
      }
    }
    setForecast(forecastDivided);
  }

  const convertTemp = (temp) => {
    if (celsius)
      return Math.round(temp - 273.15)+"°C";
    return Math.round(9/5*(temp-273.15)+32)+"F" 
  }

  async function fetchWeather(location) {
    try {
      const url = fetchOpenWeather(location);
      let response = await fetch(url);
      console.log(response);
      if ( response.status == "200") {
        let data = await response.json();
        setCurrent(data.list[0]);
        console.log(data);
        forecastSetup(data.list);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  const getWeather = (city) => {
    fetchWeather(city.location);
  }

  return (
    <div className="main">
      <Search getWeather={getWeather}></Search>
      {current && <Current current={current} convertTemp={convertTemp}></Current>}
      {forecast && <Forecast forecast={forecast} convertTemp={convertTemp}></Forecast>}
    </div>
  )
}

export default App
