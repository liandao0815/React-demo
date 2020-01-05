import * as Actions from './actions';

// ============================== Action Constants ==============================
export enum CountActionConstants {
  /** 增加计数 */
  INCREMENT_COUNT = 'INCREMENT_COUNT',
  /** 减少计数 */
  DECREMENT_COUNT = 'DECREMENT_COUNT',
  /** 增加给定计数 */
  INCREMENT_ASSIGN_COUNT = 'INCREMENT_ASSIGN_COUNT',
  /** 异步增加计数 */
  INCREMENT_COUNT_ASYNC = 'INCREMENT_COUNT_ASYNC',
  /** 异步减少计数 */
  DECREMENT_COUNT_ASYNC = 'DECREMENT_COUNT_ASYNC',
  /** 异步增加给定计数 */
  INCREMENT_ASSIGN_COUNT_ASYNC = 'INCREMENT_ASSIGN_COUNT_ASYNC'
}

// ============================== Action Types ==============================
export type IncrementCountType = ReturnType<typeof Actions.incrementCount>;
export type DecrementCountType = ReturnType<typeof Actions.decrementCount>;
export type IncrementAssignCountType = ReturnType<typeof Actions.incrementAssignCount>;
export type IncrementCountAsyncType = ReturnType<typeof Actions.incrementCountAsync>;
export type DecrementCountAsyncType = ReturnType<typeof Actions.decrementCountAsync>;
export type IncrementAssignCountAsyncType = ReturnType<typeof Actions.incrementAssignCountAsync>;

export type CountActionTypes =
  | IncrementCountType
  | DecrementCountType
  | IncrementAssignCountType
  | IncrementCountAsyncType
  | DecrementCountAsyncType
  | IncrementAssignCountAsyncType;
