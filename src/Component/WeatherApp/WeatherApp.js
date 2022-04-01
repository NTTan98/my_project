import React, { useState, useEffect } from 'react';
import './style.scss';
import { Container, Input, FormControl, Text } from '@chakra-ui/react';
import axios from 'axios';
import { getAPIWeather } from '../../api/getAPIWeather';
const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('ho chi minh');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');
  const handleSubmit = e => {
    if (city.length === 0 && query.length === 0) {
      setError('Please enter a city');
    } else {
      setError('');
      setQuery(city);
      setCity('');
    }
    e.preventDefault();
  };
  useEffect(() => {
    const getWeather = async () => {
      const { data } = await axios.get(getAPIWeather.getWeather(query));
      setWeather(data);
    };
    getWeather();
  }, [query]);
  const dateBuilder = d => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <Container
      className={
        typeof weather.main != 'undefined'
          ? Math.round(weather.main.temp - 273.15) > 16
            ? 'Container__WeatherApp'
            : 'Container__WeatherApp Cold'
          : 'Container__WeatherApp'
      }
      style={{ padding: '0' }}
    >
      <Container className="Container__Main">
        <FormControl>
          <Input
            className="Input__WeatherApp"
            type="text"
            placeholder="City"
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
        </FormControl>
        <Container className="Container__Info">
          {weather.main && (
            <Container className="weather-data">
              <Text className="City">
                {weather.name},{weather.sys.country}
              </Text>
              <Container className="Date">{dateBuilder(new Date())}</Container>
              <Text className="Temp">
                {Math.round(weather.main.temp - 273.15)}
                &deg;C
              </Text>
              <Text className="Des">{weather.weather[0].main}</Text>
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default WeatherApp;
