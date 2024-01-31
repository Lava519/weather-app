import { useState } from 'react'
import { fetchOpenWeather } from './api.js'
import Search from './components/search/Search'
import Current from './components/current/Current'
import './App.css'

function App() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  async function fetchWeather(location) {
    try {
      const url = fetchOpenWeather(location);
      let response = await fetch(url);
      console.log(response);
      if ( response.status == "200") {
        let data = await response.json();
        setCurrent(data.list[0]);
        console.log(data);
        setForecast(data.list);
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
    <>
      <Search getWeather={getWeather}></Search>
      {current && <Current current={current}></Current>}
    </>
  )
}

export default App
