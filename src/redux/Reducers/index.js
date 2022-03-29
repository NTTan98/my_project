import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
  Todo: todoReducer,
});

export default rootReducer;
