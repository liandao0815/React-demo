import styled from 'styled-components';

export const TodoListStyle = styled.div`
  width: 200px;
  margin: 100px auto;

  .todo-list__title {
    margin-bottom: 16px;
    font-weight: bold;
  }

  .todo-list__input {
    width: 200px;
    height: 32px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    outline: 0;
    text-indent: 0.5em;

    &:focus {
      border-color: #3d4ca5;
    }
  }

  .todo-list__list {
    margin: 0;
    padding: 0;
    list-style: none;

    &--clear {
      text-align: center;
      margin-top: 16px;
      color: #666666;
      cursor: pointer;
    }
  }

  .todo-list__empty {
    text-align: center;
    margin-top: 16px;
    color: #666666;
  }
`;

export const TodoItemStyle = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 16px;
  height: 28px;
  line-height: 28px;

  > span {
    flex-shrink: 0;
    cursor: pointer;

    &:first-child {
      margin-right: 16px;
      border: 1px solid #adadad;
      border-radius: 4px;
      padding: 0 12px;
    }

    &:last-child {
      text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
    }
  }
`;
