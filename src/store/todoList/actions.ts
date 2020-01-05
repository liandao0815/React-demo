import { TodoListActionConstants } from './types';

/**
 * @description 新增 todo action
 * @param todo
 */
export const addTodo = (text: string) =>
  ({
    type: TodoListActionConstants.ADD_TODO,
    payload: text
  } as const);

/**
 * @description 删除 todo action
 * @param id
 */
export const removeTodo = (key: string) =>
  ({
    type: TodoListActionConstants.DELETE_TODO,
    payload: key
  } as const);

/**
 * @description 切换 todo action
 * @param completed
 */
export const toggleTodo = (key: string) =>
  ({
    type: TodoListActionConstants.TOGGLE_TODO,
    payload: key
  } as const);

/**
 * @description 重置 todoList
 */
export const resetTodoList = () =>
  ({
    type: TodoListActionConstants.RESET_TODOLIST
  } as const);
