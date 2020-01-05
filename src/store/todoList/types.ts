import { addTodo, removeTodo, toggleTodo, resetTodoList } from './actions';

// ============================== Action Canstants ==============================
export enum TodoListActionConstants {
  /** 新增 todo */
  ADD_TODO = 'ADD_TODO',
  /** 删除 todo */
  DELETE_TODO = 'DELETE_TODO',
  /** 切换 todo */
  TOGGLE_TODO = 'TOGGLE_TODO',
  /** 重置 todoList */
  RESET_TODOLIST = 'RESET_TODOLIST'
}

// ============================== Action Types ==============================
export type AddTodoType = ReturnType<typeof addTodo>;
export type RemoveTodoType = ReturnType<typeof removeTodo>;
export type ToggleTodoType = ReturnType<typeof toggleTodo>;
export type ResetTodoListType = ReturnType<typeof resetTodoList>;

export type TodoListActionTypes = AddTodoType | RemoveTodoType | ToggleTodoType | ResetTodoListType;
