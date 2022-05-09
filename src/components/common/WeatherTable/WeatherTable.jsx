import React from 'react';
import {WeatherSelectors} from '../../../store'
import {useSelector} from 'react-redux'
import {WeatherCard} from './WeatherCard'
import css from "./weathertable.module.css";

export function WeatherTable(){

  const data=useSelector(WeatherSelectors.getWeather);
  

    const cards=[
      {label: "High/Low", value: `${Math.ceil(data.main.temp_max)} / ${Math.ceil(data.main.temp_min)}`},
      {label: "Wind", value: `${Math.ceil(data.wind.speed)} km/hr`},
      {label: "Humidity", value: `${data.main.humidity} %`},
      {label: "Wind Direction", value: `${data.wind.deg} deg`},
      {label: "Pressure", value: `${data.main.pressure} hPa`},
      {label: "Sunrise", value: `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`},
      {label: "Visibility", value: `${(data.visibility) / 1000} Km`},
      {label: "Sunset", value: `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`}
    ]
    
    return(<div className={css.WeatherBoards}>

        <div className={css.WeatherLeft}>

          <h1 className={css.degrees}>{Math.ceil(data.main.temp)}°</h1>
          <div className={css.icon}>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
            <p>{data.weather[0].main} as of {new Date().toLocaleTimeString()}</p> 
          </div>
          <h2 className="WeatherCard-city">
            {data.name}, {data.sys.country}
          </h2>
        </div>
        <div className={css.WeatherRight}>
          {cards.map(({label,value})=><WeatherCard label={label} value={value}/>)}
  </div>     
      </div>)
  }

