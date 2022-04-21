import React from 'react';
import './weathertable.css'

export class WeatherTable extends React.Component{
  render(){
    return(<div className="WeatherBoards">

        <div className="WeatherLeft-board">

          <h1 className="WeatherCard-degrees">{Math.ceil(this.props.temp)}°</h1>
          <div className="WeatherCard-icon-container">
            <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} />
            <p>{this.props.mainly} as of {new Date().toLocaleTimeString()}</p> 
          </div>
          <h2 className="WeatherCard-city">
            {this.props.city}, {this.props.country}
          </h2>

        </div>
        <div className="WeatherRight-board">

          <div className="WeatherCard-detail">

            <div>
              <h4>High/Low</h4>
            </div>
            <div>
              <p>
                {Math.ceil(this.props.temp_max)}/
                {Math.ceil(this.props.temp_min)}
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Wind</h4>
            </div>
            <div>
              <p>
                {Math.ceil(this.props.speed)} km/hr
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Humidity</h4>
            </div>
            <div>
              <p>
                {this.props.humidity} %
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Wind Direction</h4>
            </div>
            <div>
              <p>
                {this.props.deg}
                <sup>o</sup> deg
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Pressure</h4>
            </div>
            <div>
              <p>
                {this.props.pressure} hPa
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Sunrise</h4>
            </div>
            <div>
              <p>
                {new Date(this.props.sunrise * 1000).toLocaleTimeString()}
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Visibility</h4>
            </div>
            <div>
              <p>
                {(this.props.visibility) / 1000} Km
              </p>
            </div>

          </div>

          <div className="WeatherCard-detail">

            <div>
              <h4>Sunset</h4>
            </div>
            <div>
              <p>
                {new Date(this.props.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>

          </div>

        </div>

        
        
      </div>)
  }
}