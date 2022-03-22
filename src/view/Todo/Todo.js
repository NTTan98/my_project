import React from 'react';
import { useSelector } from 'react-redux';
import SetTodo from '../../Component/SetTodo';
import ListTodo from '../../Component/ListTodo';
function Todo() {
  const todoList = useSelector(state => state.Todo.list);
  return (
    <div>
      <SetTodo />
      <ListTodo todoList={todoList} />
    </div>
  );
}

export default Todo;
