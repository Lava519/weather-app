import { useState } from "react"
import { geoDB } from "../../api.js"
import "./Search.css"

export default function Search({getWeather}) {
  const DEBOUNCE = 1000;

  const [canFetch, setCanFetch] = useState(true);
  const [cityData, setCityData] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);

  async function fetchCity(input) {
    try {
      const url = geoDB.url + `?namePrefix=${input}`;
      const response = await fetch(url, geoDB.options);
      const result = await response.json();
      if (result.data) {
        setCityData(result.data.map((x)=>{
          return {
            id: x.id,
            country: x.country,
            name: x.city,
            location: {lat: x.latitude, lon: x.longitude}
          }
        }));
      }
    }catch(error) {
      console.log(error);
    }
  }

  function submitCityData(data) {
    if (cityData.length > 0) {
      getWeather(data);
      setCityData([]);
      setCurrentCity(data.name);
    }
  }

  const handleSearchChange = (e) => {
    if (canFetch) {
      setCanFetch(false)
      setTimeout(() => {
        setCanFetch(true);
        fetchCity(e.target.value);
      }, DEBOUNCE);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      submitCityData(cityData[0]);
    }
  }

  return (
   <div className="search">
      <input onKeyPress={handleKeyPress} onChange={handleSearchChange} type="text" id="search" />
      <div id="dropdown">
        {cityData.length > 0 && cityData.map((x) => {
          return ( <p className="search-city" onClick={()=>{submitCityData(x)}} key={x.id}>{x.name} <span className="search-country">{x.country}</span></p> )
        })}
      </div>
      {currentCity && <p className="searched-city">{currentCity}</p>}
   </div>
  )
}
