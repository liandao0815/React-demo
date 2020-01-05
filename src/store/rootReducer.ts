import { combineReducers } from 'redux';
import countReducer from './count/reducer';
import todoListReducer from './todoList/reducer';

export const rootReducer = combineReducers({
  count: countReducer,
  todoList: todoListReducer
});

export type RootState = ReturnType<typeof rootReducer>;
