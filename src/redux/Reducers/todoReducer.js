import _ from 'lodash';
import { REDUX_CONSTANT } from '../../bootstrap/constants';
const initialState = {
  list: [],
  idActive: null,
  idDelete: null,
};
const todoReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REDUX_CONSTANT.LIST_TODO: {
      const newList = [action.payload, ...state.list];
      console.log(newList);
      return {
        ...state,
        list: newList,
      };
    }
    case REDUX_CONSTANT.COMPLETE_TODO: {
      const newIdActive = action.payload;
      for (let i = 0; i < state.list.length; i++) {
        if (newIdActive === state.list[i].id) {
          state.list[i].isComplete = !state.list[i].isComplete;
        }
      }
      return {
        list: _.cloneDeep(state.list),
        idActive: newIdActive,
      };
    }
    case REDUX_CONSTANT.DELETE_TODO: {
      const newIdDelete = action.payload;
      //filter data
      const newList = state.list.filter(item => item.id !== newIdDelete);
      return {
        list: newList,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
