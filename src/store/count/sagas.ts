import { put, delay, takeLatest } from 'redux-saga/effects';
import { incrementCount, decrementCount, incrementAssignCount } from './actions';
import { CountActionConstants, IncrementAssignCountAsyncType } from './types';

/**
 * @description 异步增加计数 saga
 */
function* incrementCountSaga() {
  yield delay(1000);
  yield put(incrementCount());
}

/**
 * @description 异步减少计数 saga
 */
function* decrementCountSaga() {
  yield delay(1000);
  yield put(decrementCount());
}

/**
 * @description 异步增加给定计数 saga
 */
function* incrementAssignCountSaga(action: IncrementAssignCountAsyncType) {
  yield delay(1000);
  yield put(incrementAssignCount(action.payload));
}

export default function*() {
  yield takeLatest(CountActionConstants.INCREMENT_COUNT_ASYNC, incrementCountSaga);
  yield takeLatest(CountActionConstants.DECREMENT_COUNT_ASYNC, decrementCountSaga);
  yield takeLatest(CountActionConstants.INCREMENT_ASSIGN_COUNT_ASYNC, incrementAssignCountSaga);
}
