import React from 'react';
import { useSelector } from 'react-redux';
import SetTodo from '../../Component/SetTodo';
import ListTodo from '../../Component/ListTodo';
import Masthead from '../../Component/masthead';
function Todo() {
  const todoList = useSelector(state => state.Todo.list);
  return (
    <div>
      <Masthead />
      <SetTodo />
      <ListTodo todoList={todoList} />
    </div>
  );
}

export default Todo;
