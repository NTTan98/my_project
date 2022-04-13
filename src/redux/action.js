import { REDUX_CONSTANT } from '../bootstrap/constants';
export const updateTodo = value => {
  return {
    type: REDUX_CONSTANT.LIST_TODO,
    payload: value,
  };
};

export const CompleteTodoReducer = value => {
  return {
    type: REDUX_CONSTANT.COMPLETE_TODO,
    payload: value,
  };
};

export const DeleteTodoReducer = value => {
  return {
    type: REDUX_CONSTANT.DELETE_TODO,
    payload: value,
  };
};
