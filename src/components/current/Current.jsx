import "./Current.css";

export default function Current({current, convertTemp}) {
  return (
    <div className="current">
      <div className="current-main">
        <img className="current-image" src={current.weather[0].icon+".svg"} alt="weather-icon"/>
        <section className="current-main-text">
          <h1 className="current-temperature">{convertTemp(current.main.temp)}</h1>
          <p className="current-weather">{current.weather[0].main}</p>
          <p className="current-temperature-range">
            <span className="current-temperature-min">{convertTemp(current.main.temp_min)}</span>
            /
            <span className="current-temperature-max">{convertTemp(current.main.temp_max)}</span></p>
        </section>
      </div>
      <section className="current-table">
        <h2 className="current-feels-text">FEELS LIKE <span className="current-feels-temperature">{convertTemp(current.main.feels_like)}</span></h2>
        <section className="current-table-data">
          <h3>{current.wind.speed}</h3>
          <p>WIND</p>
        </section>
        <section className="current-table-data">
          <h3>{current.main.humidity}</h3>
          <p>HUMIDITY</p>
        </section>
        <section className="current-table-data">
          <h3>{current.main.pressure}</h3>
          <p>PRESSURE</p>
        </section>
        <section className="current-table-data">
          <h3>{current.visibility}</h3>
          <p>VISIBILITY</p>
        </section>
      </section>
    </div>
  )
}
