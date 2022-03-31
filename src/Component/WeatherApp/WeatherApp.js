import React, { useState } from 'react';
import './style.scss';
import { Container, Input, FormControl, Text } from '@chakra-ui/react';
import axios from 'axios';
import { getAPIWeather } from '../../api/getAPIWeather';
const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');
  const handleSubmit = e => {
    if (query.length === 0) {
      setError('Please enter a city');
    } else {
      setError('');
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${getAPIWeather.key}`
        )
        .then(res => {
          setWeather(res.data);
          console.log(res.data);
          setQuery('');
        })
        .catch(err => {
          setError('City not found');
        });
    }
    e.preventDefault();
  };
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
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
        </FormControl>
        <Container className="Container__error">
          {error && <p className="error">{error}</p>}
        </Container>
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
