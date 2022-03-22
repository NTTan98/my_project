import { CompleteTodo, ListTodo } from './../../Const/constant';
import _ from 'lodash';
const initialState = {
  list: [],
  id: null,
};
const todoReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ListTodo: {
      const newList = [action.payload, ...state.list];
      console.log(newList);
      return {
        ...state,
        list: newList,
      };
    }
    case CompleteTodo: {
      const newId = action.payload;
      for (let i = 0; i < state.list.length; i++) {
        if (newId === state.list[i].id) {
          state.list[i].isComplete = !state.list[i].isComplete;
        }
      }
      return {
        list: _.cloneDeep(state.list),
        id: newId,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
