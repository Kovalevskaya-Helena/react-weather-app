import { debounce } from 'lodash';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WeatherSelectors } from '../../store';
import { fetchWeather } from '../../store/slice';

export const useWeather = () => {
  const [city, setCity] = useState('');
  const isLoading = useSelector(WeatherSelectors.isLoading);
  const isLoaded = useSelector(WeatherSelectors.isLoaded);
  const isError = useSelector(WeatherSelectors.isError);
  const dispatch = useDispatch();
  const getWeather = (city) => dispatch(fetchWeather(city));

  const fetchWeatherDebounced = useCallback(
    debounce((city) => {
      getWeather(city);
    }, 1000),
    []
  );

  useEffect(() => {
    if (city) {
      fetchWeatherDebounced({ city });
    }
  }, [city, fetchWeatherDebounced]);

  const onChangeCity = ({ target }) => {
    setCity(`${target.value}`);
  };

  return { city, onChangeCity, isLoading, isLoaded, isError };
};
