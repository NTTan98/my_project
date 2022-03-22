import { CompleteTodo, ListTodo } from './../Const/Const';
export const updateTodo = value => {
  return {
    type: ListTodo,
    payload: value,
  };
};

export const CompleteTodoReducer = value => {
  return {
    type: CompleteTodo,
    payload: value,
  };
};
