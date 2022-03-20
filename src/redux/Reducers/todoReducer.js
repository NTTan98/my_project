import { ListTodo } from './../../Const/Const';
const initialState = {
  list: [],
  activeId: null,
};
const todoReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ListTodo: {
      return state;
    }
  }
};

export default todoReducer;
