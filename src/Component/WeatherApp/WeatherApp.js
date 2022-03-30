import React, { useState, useEffect } from 'react';
import './style.scss';
import { Container, Input, FormControl, Text } from '@chakra-ui/react';
const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');
  const handleSubmit = e => {
    if (query.length === 0) {
      setError('Please enter a city');
    } else {
      setError('');
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=57827271cac88faca3c697ee3ae49428`
      )
        .then(res => res.json())
        .then(data => {
          setWeather(data);
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
    <Container className="Container__WeatherApp">
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
        <Container className="Container__Info">
          {error && <p className="error">{error}</p>}
          {weather.main && (
            <Container className="weather-data">
              <Text className="City">{weather.name}</Text>
              <Text className="Temp">
                {Math.round(weather.main.temp - 273.15)}
                &deg;C
              </Text>
              <Text className="Des">{weather.weather[0].description}</Text>
            </Container>
          )}
          <Container className="Date">{dateBuilder(new Date())}</Container>
        </Container>
      </Container>
    </Container>
  );
};

export default WeatherApp;