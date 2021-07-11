import { combineReducers } from 'redux';
import toDoReducer from './todos';

const rootReducer = combineReducers({
  todos: toDoReducer,
});

export default rootReducer;
