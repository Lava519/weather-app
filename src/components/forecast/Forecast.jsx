import { useState } from "react";
import "./Forecast.css";

export default function Forecast({forecast, convertTemp}) {
  
  const [day, setDay] = useState(0);

  return (
    <div className="forecast">
      <div className="forecast-buttons-container">
        <div className="forecast-line" ></div>
        <div className="forecast-buttons">
          {forecast[0].length > 0 && <a className={`day-button ${day == 0 ? "active": ""}`} onClick={()=>{setDay(0)}}></a>}
          <a className={`day-button ${day == 1 ? "active": ""}`} onClick={()=>{setDay(1)}}></a>
          <a className={`day-button ${day == 2 ? "active": ""}`} onClick={()=>{setDay(2)}}></a>
          <a className={`day-button ${day == 3 ? "active": ""}`} onClick={()=>{setDay(3)}}></a>
          <a className={`day-button ${day == 4 ? "active": ""}`} onClick={()=>{setDay(4)}}></a>
          {forecast[5].length > 0 && <a className={`day-button ${day == 5 ? "active": ""}`} onClick={()=>{setDay(5)}}></a>}
        </div>
        <div className="forecast-line"></div>
      </div>
      <div className="forecast-day-container">
        {forecast[day].map((x) => {
          return (
          <div className="forecast-day" key={x.dt}>
            <div className="forecast-image-container">
              <img className="forecast-image" src={x.weather[0].icon+".svg"}/>
            </div>
            <section className="forecast-text">
              <h2 className="forecast-time">{x.dt_txt.slice(-8, -3)}</h2>
              <p className="forecast-temperature">{convertTemp(x.main.temp)}</p>
            </section>
          </div>)
        })}
      </div>
    </div>
  ) 
}
