import { combineReducers } from 'redux';
// import CompleteTodoReducer from './complete';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
  Todo: todoReducer,
  // Complete: CompleteTodoReducer,
});

export default rootReducer;
