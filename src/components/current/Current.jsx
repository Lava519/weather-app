export default function Current({current}) {
  return (
    <div>
      <h1>{current.main.temp}</h1>
      <p>{current.main.humidity}</p>
    </div>
  )
}
