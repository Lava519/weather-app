import "./Current.css";

export default function Current({current, convertTemp}) {
  return (
    <div className="current">
      <div className="current-main">
        <div className="current-image-container">
          <img className="current-image" src={current.weather[0].icon+".svg"} alt="weather-icon"/>
        </div>
        <section className="current-main-text">
          <h1 className="current-temperature">{convertTemp(current.main.temp)}</h1>
          <p className="current-weather">{current.weather[0].main}</p>
        </section>
      </div>
      <section className="current-table">
        <h2 className="current-feels-text">FEELS LIKE <span className="current-feels-temperature">{convertTemp(current.main.feels_like)}</span></h2>
        <section className="current-table-data">
          <h3>{current.wind.speed+"m/s"}</h3>
          <p>WIND</p>
        </section>
        <section className="current-table-data">
          <h3>{current.main.humidity+"%"}</h3>
          <p>HUMIDITY</p>
        </section>
        <section className="current-table-data">
          <h3>{current.main.pressure+"hPa"}</h3>
          <p>PRESSURE</p>
        </section>
        <section className="current-table-data">
          <h3>{current.visibility+"m"}</h3>
          <p>VISIBILITY</p>
        </section>
      </section>
    </div>
  )
}
