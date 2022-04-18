import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Container,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../redux/action';

function SetTodo() {
  const [typeValue, setTypeValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => setTypeValue(e.target.value);

  const handleEnter = e => {
    if (typeValue) {
      if (e.keyCode === 13) {
        const ListTodo = {
          id: uuidv4(),
          isComplete: false,
          todo: typeValue,
        };
        const action = updateTodo(ListTodo);
        dispatch(action);
        setTypeValue('');
      }
    }
  };
  const handleClick = e => {
    if (typeValue) {
      const ListTodo = {
        id: uuidv4(),
        isComplete: false,
        todo: typeValue,
      };
      const action = updateTodo(ListTodo);
      dispatch(action);
      setTypeValue('');
    }
  };
  return (
    <Container>
      <InputGroup
        size="md"
        onKeyUp={handleEnter}
        maxW={{
          lg: '400px',
          md: '300px',
          sm: '200px',
          xs: '100%',
        }}
        pb="1rem"
      >
        <Input
          placeholder="Todo"
          type={'text'}
          value={typeValue}
          onChange={handleChange}
        />
        <InputRightElement right={'10px'}>
          <Button onClick={handleClick} size="sm" colorScheme={'red'}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </Container>
  );
}

export default SetTodo;
