import {debounce} from 'lodash';
import React from 'react';
import {Loader} from './common'
import css from './app.module.css'
import {WeatherTable} from './common'
import {connect} from 'react-redux'
import {WeatherSelectors,WeatherActions} from '../store'


export class AppOriginal extends React.Component{
  
  state={
    city:'',
  }

  fetchWeatherDebounced=debounce(this.props.getWeather,1000);

  componentDidUpdate(_, prevState){
    if(prevState.city!==this.state.city){
      this.fetchWeatherDebounced({city:this.state.city})
    }
    

  }
  render(){
    const {city}=this.state;
    const {isLoading,isLoaded,isError}=this.props;
    return <div className={css.wrapper}>
      <input className={css.searchbar} value={city} onChange={(event)=>this.setState({city:event.target.value})}/>
      {isLoading&&<Loader/>}
      {isError&&<p>Не удалось получить данные, попробуйте изменить запрос</p>}
      {isLoaded&&(<WeatherTable/>)}
    </div>
  }
  
}

const mapStateToProps=(state)=>{
  return{
    isLoading:WeatherSelectors.isLoading(state),
    isLoaded:WeatherSelectors.isLoaded(state),
    isError:WeatherSelectors.isError(state),
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getWeather:(city)=>dispatch(WeatherActions.fetchWeather(city)),
  }
}

export const App= connect(mapStateToProps,mapDispatchToProps)(AppOriginal);


