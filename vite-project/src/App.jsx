import {useState} from 'react'
import './App.css'

const App = () => {
  const[search,setSearch]=useState("")
  const[weather,setweather]=useState({})

  const api = {
    key:"e1b9db22a160713ceca54b14ddf011a8",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }

  function handlesearch(){
    fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(d=>setweather(d))
  }
  return (
    <div>
      <h1>Weather App</h1>
      <section>
        <input onChange={(e)=>setSearch(e.target.value)} type="search"></input>
        <button onClick={handlesearch}>Search</button>
        {(typeof weather.main!=="undefined")?(
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </div>
        ):("Not Found")}
      </section>
    </div>
  )
}

export default App