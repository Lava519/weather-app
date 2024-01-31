import { useState } from "react"
import { geoDB } from "../../api.js"
export default function Search({getWeather}) {
  const DEBOUNCE = 1000;

  const [canFetch, setCanFetch] = useState(true);
  const [cityData, setCityData] = useState([]);

  async function fetchCity(input) {
    try {
      const url = geoDB.url + `?namePrefix=${input}`;
      const response = await fetch(url, geoDB.options);
      const result = await response.json();
      if (result.data)
        setCityData(result.data.map((x)=>{
          return {
            id: x.id,
            country: x.country,
            name: x.city,
            location: {lat: x.latitude, lon: x.longitude}
          }
        }));
    }catch(error) {
      console.log(error);
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
    if (e.key == "Enter" && cityData.length > 0 ) {
      getWeather(cityData[0]);
    }
  }

  return (
   <>
      <input onKeyPress={handleKeyPress} onChange={handleSearchChange} type="text" id="search" />
      {cityData.length > 0 && cityData.map((x) => {
        return ( <p key={x.id}>{x.name}</p> )
      })}
   </>
  )
}
