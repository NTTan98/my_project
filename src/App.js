import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Todo from './view/Todo/Todo';
import { Provider } from 'react-redux';
import store from './redux/store';
export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Todo />
    </ChakraProvider>
  </Provider>
);
