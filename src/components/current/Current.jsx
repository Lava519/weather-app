export default function Current({current, convertTemp}) {
  return (
    <div>
      <div>
        <img src="" alt="weather-icon"/>
        <section>
          <h1>{convertTemp(current.main.temp)}</h1>
          <p>{current.weather[0].main}</p>
          <p>
            <span>{convertTemp(current.main.temp_min)}</span>
            /
            <span>{convertTemp(current.main.temp_max)}</span></p>

        </section>
      </div>
      <div>
        <section>
          <h2>FEELS LIKE <span>{convertTemp(current.main.feels_like)}</span></h2>
          <div>
            <p>{current.wind.speed}</p>
            <p>WIND</p>
          </div>
          <div>
            <p>{current.main.humidity}</p>
            <p>HUMIDITY</p>
          </div>
          <div>
            <p>{current.main.pressure}</p>
            <p>PRESSURE</p>
          </div>
          <div>
            <p>{current.visibility}</p>
            <p>VISIBILITY</p>
          </div>
        </section>
      </div>
    </div>
  )
}
