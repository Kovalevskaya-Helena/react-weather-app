
import React from 'react';
import {Loader} from './common'
import css from './app.module.css'
import {WeatherTable} from './common'
import {useWeather} from './hooks'


export function App (){

  const weather=useWeather();

    return <div className={css.wrapper}>
      <input className={css.searchbar} value={weather.city} onChange={weather.onChangeCity}/>
      {weather.isLoading&&<Loader/>}
      {weather.isError&&<p>Не удалось получить данные, попробуйте изменить запрос</p>}
      {weather.isLoaded&&(<WeatherTable/>)}
    </div>
  
  
}






