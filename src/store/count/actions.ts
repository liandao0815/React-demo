import { CountActionConstants } from './types';

/**
 * @description 增加计数 action
 */
export const incrementCount = () =>
  ({
    type: CountActionConstants.INCREMENT_COUNT
  } as const);

/**
 * @description 减少计数 action
 */
export const decrementCount = () =>
  ({
    type: CountActionConstants.DECREMENT_COUNT
  } as const);

/**
 * @description 增加给定计数 action
 * @param count
 */
export const incrementAssignCount = (count: number) =>
  ({
    type: CountActionConstants.INCREMENT_ASSIGN_COUNT,
    payload: count
  } as const);

/**
 * @description 异步增加计数 action
 */
export const incrementCountAsync = () =>
  ({
    type: CountActionConstants.INCREMENT_COUNT_ASYNC
  } as const);

/**
 * @description 异步减少计数 action
 */
export const decrementCountAsync = () =>
  ({
    type: CountActionConstants.DECREMENT_COUNT_ASYNC
  } as const);

/**
 * @description 异步增加给定计数 action
 * @param count
 */
export const incrementAssignCountAsync = (count: number) =>
  ({
    type: CountActionConstants.INCREMENT_ASSIGN_COUNT_ASYNC,
    payload: count
  } as const);
