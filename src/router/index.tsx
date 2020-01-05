import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('src/containers/Home'));
const Count = lazy(() => import('src/containers/Count'));
const TodoList = lazy(() => import('src/containers/TodoList'));

const RouterComponent = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/count" component={Count}></Route>
        <Route path="/todolist" component={TodoList}></Route>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default RouterComponent;
