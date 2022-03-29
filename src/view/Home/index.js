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
      </Routes>
      {/* auth router */}
      <HStack spacing={8}>
        <Header items={items} />
        <VStack className="Home__Container" spacing={8}>
          <Routes>
            {items.map(item => (
              <Route
                className="Route"
                path={item.path}
                element={item.element}
                key={item.name}
              />
            ))}
          </Routes>
        </VStack>
      </HStack>
    </div>
  );
};

export default Home;
