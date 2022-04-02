import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../../api/CoronaAPI.js';
import { Grid, Input } from '@chakra-ui/react';
const CoronaTracking = () => {
  const [corona, setCorona] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setCorona(res.data);
      })
      .catch(err => {
        console.log(err);
      });
      set
  }, []);

  console.log(corona);
  return (
    <div>
      <h1>CoronaTracking</h1>
      <Input
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
          }
        }}
      />
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={4}
        mt={4}
        p={4}
      >
        {/* <p1>{searchResult[0].country}</p1> */}
      </Grid>
    </div>
  );
};

export default CoronaTracking;
