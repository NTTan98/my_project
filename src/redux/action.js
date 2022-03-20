import { ListTodo } from './../Const/Const';
export const updateTodo = value => {
  return {
    type: ListTodo,
    payload: value,
  };
};
