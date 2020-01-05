import { fork } from 'redux-saga/effects';
import countSaga from './count/sagas';
// import todoListSaga from './todoList/sagas';

export const rootSaga = function*() {
  yield fork(countSaga);
  // yield fork(todoListSaga)
};
