import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import produce, { Draft } from 'immer';
import useTitle from 'src/hooks/useTitle';
import { RootState } from 'src/store/rootReducer';
import { TodoListState } from 'src/store/todoList/reducer';
import * as Actions from 'src/store/todoList/actions';
import { TodoListStyle, TodoItemStyle } from './style';

type State = { value: string };

const TodoList = () => {
  useTitle('TodoList Page');

  const initState: State = { value: '' };
  const [state, setState] = useState(initState);

  const { list } = useSelector<RootState, TodoListState>(state => state.todoList, shallowEqual);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value.trim();
    setState(
      produce((draftState: Draft<State>) => {
        draftState.value = value;
      })
    );
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const keyValue = event.key;
    const { value } = state;

    if (keyValue === 'Enter' && value) {
      dispatch(Actions.addTodo(value));
      setState(
        produce((draftState: Draft<State>) => {
          draftState.value = '';
        })
      );
    }
  };

  const handleToggleTodo = (event: React.MouseEvent<HTMLSpanElement>): void => {
    const parent = event.currentTarget.closest('li') as HTMLLIElement;
    const key = parent.dataset.key ?? '';
    dispatch(Actions.toggleTodo(key));
  };

  const handleRemoveTodo = (event: React.MouseEvent<HTMLSpanElement>): void => {
    const parent = event.currentTarget.closest('li') as HTMLLIElement;
    const key = parent.dataset.key ?? '';
    dispatch(Actions.removeTodo(key));
  };

  const handleResetTodoList = (): void => {
    dispatch(Actions.resetTodoList());
  };

  return (
    <TodoListStyle>
      <div className="todo-list__title">ToDoList</div>
      <input
        className="todo-list__input"
        type="text"
        value={state.value}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      {list.length ? (
        <>
          <ul className="todo-list__list">
            {list.map(todo => (
              <TodoItemStyle key={todo.key} data-key={todo.key} completed={todo.completed}>
                <span onClick={handleRemoveTodo}>删除</span>
                <span onClick={handleToggleTodo}>{todo.text}</span>
              </TodoItemStyle>
            ))}
          </ul>
          <div className="todo-list__list--clear" onClick={handleResetTodoList}>
            清空所有Todo
          </div>
        </>
      ) : (
        <div className="todo-list__empty">空空如也~</div>
      )}
    </TodoListStyle>
  );
};

export default React.memo(TodoList);
