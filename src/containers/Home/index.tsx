import React from 'react';
import { useHistory } from 'react-router-dom';
import useTitle from 'src/hooks/useTitle';
import { HomeStyle } from './style';

const Home = () => {
  useTitle('Home Page');

  const history = useHistory();

  const handleNavigateClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const path = event.currentTarget.dataset.path ?? '';
    history.push(path);
  };

  return (
    <HomeStyle>
      {/* <Link to="/count">Count Page</Link>
      <Link to="/todolist">TodoList Page</Link> */}
      <button data-path="/count" onClick={handleNavigateClick}>
        Count Page
      </button>
      <button data-path="/todolist" onClick={handleNavigateClick}>
        TodoList Page
      </button>
    </HomeStyle>
  );
};

export default React.memo(Home);
