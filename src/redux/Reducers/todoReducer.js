import { CompleteTodo, ListTodo } from './../../Const/Const';
const initialState = {
  list: [],
  status: [],
};
const todoReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ListTodo: {
      const newList = action.payload;
      return {
        ...state,
        list: newList,
      };
    }
    case CompleteTodo: {
      const newStatus = action.payload;
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === newStatus[0].id) {
          state.list[i].isComplete = newStatus[0].isComplete;
        }
      }
      console.log(state.list);
      return {
        ...state,
        status: newStatus,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
