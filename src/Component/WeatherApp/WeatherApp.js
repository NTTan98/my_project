import React, { useState, useEffect } from 'react';
import {
  Container,
  Input,
  FormControl,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import { getAPIWeather } from '../../api/getAPIWeather';
import WeatherWallpaper from '../../assets/weather.jpg';
import dateBuilder from '../../utils/helpFunction';
const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('ho chi minh');
  const [error, setError] = useState(false);
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
      await axios
        .get(getAPIWeather.getWeather(query))
        .then(res => {
          setWeather(res.data);
          setError(false);
        })
        .catch(err => {
          if (err) {
            setError(true);
          }
        });
    };
    getWeather();
  }, [query]);
  return (
    <Container
      className="Weather__App"
      p={0}
      m={0}
      maxW={'full'}
      height={'100vh'}
      backgroundImage={`url(${WeatherWallpaper})`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Container
        maxW={'full'}
        height={'100vh'}
        pt={'100px'}
        bgImage=" linear-gradient(
          to left,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.8)
        )"
      >
        <FormControl p={0} m={'auto'} w={'50%'} mb={'20px'}>
          <Input
            border={'none'}
            outline={'1px solid #fff'}
            color="#fff"
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
        {error ? (
          <Alert status="error" size={'md'}>
            <AlertIcon />
            <Text>
              Sorry, we can't find the city you are looking for. Please try
              again.
            </Text>
          </Alert>
        ) : (
          <Container p={0}>
            {weather.main && (
              <Container>
                <Text
                  fontSize={'4xl'}
                  fontWeight={'bold'}
                  fontStyle={'italic'}
                  textAlign={'center'}
                  color="#fff"
                  mb={'20px'}
                >
                  {weather.name},{weather.sys.country}
                </Text>
                <Text
                  fontSize={'3xl'}
                  fontStyle={'italic'}
                  textAlign={'center'}
                  color="#fff"
                  mb={'20px'}
                >
                  {dateBuilder(new Date(weather.dt * 1000))}
                </Text>
                <Text
                  m={'auto'}
                  maxW={'50%'}
                  bgColor={'rgba(255, 255, 255, 0.3)'}
                  borderRadius={'20px'}
                  textAlign={'center'}
                  fontSize={'6xl'}
                  fontWeight={'bold'}
                  fontStyle={'italic'}
                  mb={'20px'}
                >
                  {Math.round(weather.main.temp - 273.15)}
                  &deg;C
                </Text>
                <Text
                  fontSize={'4xl'}
                  fontStyle={'italic'}
                  textAlign={'center'}
                  color="#fff"
                  mb={'20px'}
                >
                  {weather.weather[0].main}
                </Text>
              </Container>
            )}
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default WeatherApp;
