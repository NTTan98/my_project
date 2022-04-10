import { CompleteTodo, DeleteTodo, ListTodo } from './../Const/constant';
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

export const DeleteTodoReducer = value => {
  return {
    type: DeleteTodo,
    payload: value,
  };
};
