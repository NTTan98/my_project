import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Checkbox,
  Flex,
  Spacer,
  Text,
  Icon,
  Textarea,
} from '@chakra-ui/react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { CompleteTodoReducer, DeleteTodoReducer } from '../redux/action';

function ListTodo(props) {
  const { todoList } = props;
  // Update status Todo
  const dispatch = useDispatch();
  const handleClickId = todo => {
    const idSelectActive = todo.id;
    const action = CompleteTodoReducer(idSelectActive);
    dispatch(action);
  };
  const handleClickDelete = todo => {
    const idSelectDelete = todo.id;
    const action = DeleteTodoReducer(idSelectDelete);
    dispatch(action);
  };
  return (
    <div>
      {todoList.map(todo => (
        <Container maxW="400" key={todo.id} className="Todo__List">
          <Flex justify={'justifyContent'} align={'center'}>
            <Checkbox
              colorScheme="green"
              spacing="1rem"
              iconColor="red.400"
              iconSize="1rem"
              onChange={() => handleClickId(todo)}
            >
              <Text
                style={
                  todo.isComplete
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: 'none' }
                }
              >
                {todo.todo}
              </Text>
            </Checkbox>
            <Spacer />
            <Icon
              style={{ cursor: 'pointer' }}
              as={AiTwotoneDelete}
              onClick={() => handleClickDelete(todo)}
            />
          </Flex>
        </Container>
      ))}
    </div>
  );
}

export default ListTodo;
