import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../../api/CoronaAPI.js';
import { Flex, Container, Heading, Input } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const CoronaTracking = () => {
  const [corona, setCorona] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setCorona(result.data);
    };
    fetchData();
  }, []);

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };
  let data;
  if (corona !== null) {
    if (searchResult.length > 0) {
      data = {
        labels: ['Cases', 'Deaths', 'Recovered'],
        datasets: [
          {
            label: 'Corona',
            backgroundColor: ['#e11f11', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#e11f11', '#36A2EB', '#FFCE56'],
            data: [
              searchResult[0].cases,
              searchResult[0].deaths,
              searchResult[0].recovered,
            ],
          },
        ],
        name: searchResult[0].country,
      };
    } else {
      data = {
        labels: ['Cases', 'Deaths', 'Recovered'],
        datasets: [
          {
            label: 'Corona',
            backgroundColor: ['#e11f11', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#e11f11', '#36A2EB', '#FFCE56'],
            data: [corona[0].cases, corona[0].deaths, corona[0].recovered],
          },
        ],
        name: corona[0].country,
      };
    }
  }
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      mt={'2rem'}
      className="Animation"
    >
      <Heading
        as="h3"
        size="lg"
        mb={'1rem'}
        color={'#e11f11'}
        fontWeight={'bold'}
      >
        Where do you want tracking Covid 19
      </Heading>
      <Input
        value={search}
        placeholder="Search"
        onChange={e => {
          setSearch(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            setSearchResult(
              corona.filter(item => {
                return item.country
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
            );
            setSearch('');
          }
        }}
        w={'50%'}
        mb={'1rem'}
        boxShadow={'0px 0px 10px #e11f11'}
      />
      <Heading as="h5" size="md" color={'#e11f11'} fontWeight={'bold'}>
        COVID 19 Chart{' in the '}
        {corona !== null ? data.name : ''}
      </Heading>
      <Container mt={'1rem'} mb={'1rem'} w={'100%'} h={'400px'}>
        {corona !== null ? <Doughnut data={data} options={options} /> : ''}
      </Container>
    </Flex>
  );
};

export default CoronaTracking;
