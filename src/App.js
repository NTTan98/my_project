import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './view/Home/index';
import Demo from './demo/demo';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Home />
        {/* <Demo /> */}
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
