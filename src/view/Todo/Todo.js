import React from 'react';
import { useSelector } from 'react-redux';
import SetTodo from '../../Component/TodoComponent/SetTodo';
import ListTodo from '../../Component/TodoComponent/ListTodo';
import Masthead from '../../Component/TodoComponent/masthead';
import './style.scss';
function Todo() {
  const todoList = useSelector(state => state.Todo.list);
  return (
    <div className="Todo__App">
      <Masthead title="What's Up, Tan" />
      <SetTodo />
      <ListTodo todoList={todoList} />
    </div>
  );
}

export default Todo;
