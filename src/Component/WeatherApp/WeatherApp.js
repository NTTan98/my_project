import React, { useState, useEffect } from 'react';
import './style.scss';
import { Container, Input, FormControl, Text } from '@chakra-ui/react';
import axios from 'axios';
import { getAPIWeather } from '../../api/getAPIWeather';
import dateBuilder from '../../utils/helpFunction';
const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('ho chi minh');
  const [weather, setWeather] = useState({});
  const handleSubmit = e => {
    if (city.length === 0 && query.length === 0) {
      alert('Please enter a city');
    } else {
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
  return (
    <Container
      maxW={'full'}
      className={
        typeof weather.main != 'undefined'
          ? Math.round(weather.main.temp - 273.15) > 16
            ? 'Container__WeatherApp'
            : 'Container__WeatherApp Cold'
          : 'Container__WeatherApp'
      }
      style={{
        padding: '0px',
      }}
    >
      <Container className="Container__Main" maxW={'full'}>
        <FormControl>
          <Input
            w={'400px'}
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
              <Text className="Date">
                {dateBuilder(new Date(weather.dt * 1000))}
              </Text>
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
