import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputGroup, Input } from '@chakra-ui/react';
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
  return (
    <div>
      <InputGroup size="md" onKeyUp={handleEnter}>
        <Input
          maxW="400"
          margin="auto"
          placeholder="Todo"
          type={'text'}
          value={typeValue}
          onChange={handleChange}
        ></Input>
      </InputGroup>
    </div>
  );
}

export default SetTodo;
