import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './view/Home/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import themeCustom from './ColorModeSwitcher/theme';
import './style.scss';
const theme = extendTheme(themeCustom);
export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
