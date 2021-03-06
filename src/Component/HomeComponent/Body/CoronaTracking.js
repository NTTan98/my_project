import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../bootstrap/constants';
import { Flex, Heading, Input, Box } from '@chakra-ui/react';
import { RESPONSIVE_CONFIG } from '../../../utils/config';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const CoronaTracking = () => {
  const [corona, setCorona] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(BASE_URL.URL_CORONA);
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
    <Flex {...RESPONSIVE_CONFIG.CONTAINER_FLEX_CONFIG} align="center">
      <Heading {...RESPONSIVE_CONFIG.HEADING_CONFIG}>Covid 19</Heading>
      <Input
        value={search}
        placeholder="Where do you want tracking Covid 19?"
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
        width={'50%'}
        mb={'1rem'}
        boxShadow={'0px 0px 10px #e11f11'}
      />
      <Heading as="h5" fontWeight="bold" fontStyle="italic" textAlign="center">
        COVID 19 Chart{' in the '}
        {corona !== null ? data.name : ''}
      </Heading>
      <Box
        w={{
          lg: '100%',
          md: '100%',
          sm: '100%',
          '2sm': '100%',
        }}
        height="400px"
      >
        {corona !== null ? <Doughnut data={data} options={options} /> : ''}
      </Box>
    </Flex>
  );
};

export default CoronaTracking;
