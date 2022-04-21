import {debounce} from 'lodash';
import React from 'react';
import {getCurrentWeather} from '../api'
import {LOAD_STATUSES} from '../constants'
import {Loader} from './common'
import css from './app.module.css'
import {WeatherTable} from './common'
export class App extends React.Component{
  
  state={
    city:'',
    data:'',
    loadStatus: LOAD_STATUSES.UNKNOWN,
  }

  fetchWeather=(params)=>{
    this.setState({loadStatus:LOAD_STATUSES.LOADING});

    getCurrentWeather(params).then(({main, weather, name,sys, wind,visibility})=>{
    
      this.setState({loadStatus:LOAD_STATUSES.LOADED, data:{...main,icon:weather[0].icon, mainly:weather[0].main, city:name, ...sys, ...wind,visibility}})
    }).catch(()=>
    {this.setState({loadStatus:LOAD_STATUSES.ERROR, data:{}})
  });
}

  fetchWeatherDebounced=debounce(this.fetchWeather,1000);

  componentDidUpdate(_, prevState){
    if(prevState.city!==this.state.city){
      this.fetchWeatherDebounced({city:this.state.city})
    }
    

  }
  render(){
    return <div className={css.wrapper}>
      <input className={css.searchbar} value={this.state.city} onChange={(event)=>this.setState({city:event.target.value})}/>
      {this.state.loadStatus===LOAD_STATUSES.LOADING&&<Loader/>}
      {this.state.loadStatus===LOAD_STATUSES.ERROR&&<p>Не удалось получить данные, попробуйте изменить запрос</p>}
      {this.state.loadStatus===LOAD_STATUSES.LOADED&&(<WeatherTable {...this.state.data}/>)}
    </div>
  }
  
}


