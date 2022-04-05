import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Checkbox,
  Flex,
  Spacer,
  Text,
  Icon,
} from '@chakra-ui/react';
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
import { CompleteTodoReducer, DeleteTodoReducer } from '../../redux/action';

function ListTodo(props) {
  const { todoList } = props;
  const [edit, setEdit] = useState();
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
  const handleClickEdit = todo => {
    setEdit(todo);
    console.log('render edit', todo);
  };
  return (
    <div>
      {todoList.map(todo => (
        <Container
          maxW="400"
          key={todo.id}
          style={{
            marginTop: '10px',
            borderRadius: '5px',
            padding: '10px',
            boxShadow: '0px 0px 5px #eaeaea',
          }}
        >
          <Flex justify={'justifyContent'} align={'center'}>
            <Checkbox
              colorScheme="green"
              spacing="1rem"
              iconColor="red.400"
              iconSize="1rem"
              onChange={() => handleClickId(todo)}
            >
              <Text
                className="Todo__List__Textarea"
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
              style={{ cursor: 'pointer', color: 'red' }}
              as={AiTwotoneDelete}
              onClick={() => handleClickDelete(todo)}
            />
            <Icon
              style={{ cursor: 'pointer', marginLeft: '10px', color: 'blue' }}
              as={AiFillEdit}
              onClick={() => handleClickEdit(todo)}
            />
          </Flex>
        </Container>
      ))}
    </div>
  );
}

export default ListTodo;
