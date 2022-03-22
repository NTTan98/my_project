import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Checkbox, Text } from '@chakra-ui/react';
import { CompleteTodoReducer } from '../redux/action';

function ListTodo(props) {
  const [update, setUpdate] = useState([]);
  const { todoList } = props;
  // Update status Todo
  const dispatch = useDispatch();
  const handleClickId = todo => {
    setUpdate([{ id: todo.id, isComplete: !todo.isComplete }]);
  };
  useEffect(() => {
    const action = CompleteTodoReducer(update);
    dispatch(action);
  }, [dispatch, update]);
  return (
    <div>
      {todoList.map(todo => (
        <Container maxW="container.md" key={todo.id} className="Todo__List">
          <Checkbox
            colorScheme="green"
            spacing="1rem"
            iconColor="red.400"
            iconSize="1rem"
          >
            <Text
              onClick={() => handleClickId(todo)}
              style={
                todo.isComplete
                  ? { textDecoration: 'line-through' }
                  : { textDecoration: 'none' }
              }
            >
              {todo.todo}
            </Text>
          </Checkbox>
        </Container>
      ))}
    </div>
  );
}

export default ListTodo;
