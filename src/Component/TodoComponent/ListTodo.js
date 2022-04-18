import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Checkbox,
  Flex,
  Spacer,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { CompleteTodoReducer, DeleteTodoReducer } from '../../redux/action';
import ModalDelete from '../ModalDelete/ModalDelete';

function ListTodo(props) {
  const { todoList } = props;
  const [idSelectDelete, setIdSelectDelete] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  // Update status Todo
  const dispatch = useDispatch();
  const handleClickId = todo => {
    const idSelectActive = todo.id;
    const action = CompleteTodoReducer(idSelectActive);
    dispatch(action);
  };
  const idSelect = todo => {
    setIdSelectDelete(todo.id);
  };
  const handleClickDelete = () => {
    const action = DeleteTodoReducer(idSelectDelete);
    dispatch(action);
  };

  return (
    <Container>
      {todoList.map(todo => (
        <Container
          // maxW="400"
          maxW={{
            lg: '400px',
            md: '300px',
            sm: '200px',
            xs: '100%',
          }}
          key={todo.id}
          mb="1rem"
          borderRadius="5px"
          padding="10px"
          boxShadow="0px 0px 10px #00bfff"
        >
          <Flex justify={'justifyContent'} align={'center'}>
            <Checkbox
              spacing="1rem"
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
            <Button
              size={'sm'}
              colorScheme="red"
              onClick={() => {
                onOpen();
                idSelect(todo);
              }}
            >
              Delete
            </Button>
          </Flex>
        </Container>
      ))}
      <ModalDelete
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        handleClickDelete={handleClickDelete}
      />
    </Container>
  );
}

export default ListTodo;
