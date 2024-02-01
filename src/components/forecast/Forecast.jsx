import { useState } from "react";

export default function Forecast({forecast}) {
  
  const [day, setDay] = useState(0);

  return (
    <div>
      <div>
        <div></div>
        <div>
          <a onClick={()=>{setDay(0)}}>o</a>
          <a onClick={()=>{setDay(1)}}>o</a>
          <a onClick={()=>{setDay(2)}}>o</a>
          <a onClick={()=>{setDay(3)}}>o</a>
          <a onClick={()=>{setDay(4)}}>o</a>
          <a onClick={()=>{setDay(5)}}>o</a>
        </div>
        <div></div>
      </div>
      <div>
        {forecast[day].map((x) => {
          return (
          <div key={x.dt}> 
            <p>{x.main.temp}</p>
          </div>)
        })}
      </div>
    </div>
  ) 
}
