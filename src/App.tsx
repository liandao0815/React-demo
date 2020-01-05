import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import store from './store';
import RouterComponent from './router';

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  </ErrorBoundary>
);

export default App;
