import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputGroup, Input, Button, InputRightElement } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

function SetTodo() {
  const [listTodo, setListTodo] = useState([]);
  const [typeValue, setTypeValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => setTypeValue(e.target.value);
  const handleAddTodo = () => {
    setListTodo([
      {
        id: uuidv4(),
        isComplete: false,
        todo: typeValue,
      },
      ...listTodo,
    ]);
    setTypeValue('');
    console.log(listTodo);
  };
  return (
    <div>
      <InputGroup size="md">
        <Input
          placeholder="Todo"
          type={'text'}
          value={typeValue}
          onChange={handleChange}
        ></Input>
        <InputRightElement
          children={
            <Button
              p={4}
              size="sm"
              isDisabled={!typeValue}
              onClick={handleAddTodo}
            >
              Add
            </Button>
          }
        />
      </InputGroup>
    </div>
  );
}

export default SetTodo;
