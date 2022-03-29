import React from 'react';
import Header from '../../Component/HomeComponent/NavBar/NavBar';
import Login from '../../Component/LoginComponent/login';
import { items } from '../../Const/itemsChangePage';
import { HStack, VStack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nav/*" element={<Header items={items} />} />
      </Routes>
    </div>
  );
};

export default Home;
