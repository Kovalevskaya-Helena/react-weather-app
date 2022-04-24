import React from 'react';
import css from "./weathercard.module.css";
export const WeatherCard = ({ label, value }) => {
  return (
    <div className={css.detail}>
      <div>
        <h4>{label}</h4>
      </div>
      <div>
        <p className={css.values}>
          {value}
        </p>
    </div>
    </div>
  )
}