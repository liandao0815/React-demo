import { Reducer } from 'redux';
import produce, { Draft } from 'immer';
import { CountActionTypes, CountActionConstants } from './types';

export type CountState = Readonly<{
  count: number;
}>;

const initialCountState: CountState = { count: 0 };

const countReducer: Reducer<CountState, CountActionTypes> = produce(
  (draftState: Draft<CountState>, action: CountActionTypes) => {
    switch (action.type) {
      case CountActionConstants.INCREMENT_COUNT:
        draftState.count++;
        break;
      case CountActionConstants.DECREMENT_COUNT:
        draftState.count--;
        break;
      case CountActionConstants.INCREMENT_ASSIGN_COUNT:
        draftState.count += action.payload;
        break;
    }
  },
  initialCountState
);

export default countReducer;
