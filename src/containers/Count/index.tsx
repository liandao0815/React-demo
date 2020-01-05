import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import useTitle from 'src/hooks/useTitle';
import { RootState } from 'src/store/rootReducer';
import { CountState } from 'src/store/count/reducer';
import * as Actions from 'src/store/count/actions';
import { CountStyle } from './style';

const Count = () => {
  useTitle('Count Page');

  const { count } = useSelector<RootState, CountState>(state => state.count, shallowEqual);
  const dispatch = useDispatch();

  const incrementCountHdl = (): void => {
    dispatch(Actions.incrementCount());
  };

  const decrementCountHdl = (): void => {
    dispatch(Actions.decrementCount());
  };

  const incrementAssignCountHdl = (): void => {
    const inputCount = prompt('请输入需要增加的计数');
    const valid = _validateCount(inputCount);
    if (!valid) return;
    dispatch(Actions.incrementAssignCount(Number(inputCount)));
  };

  const incrementCountAsyncHdl = (): void => {
    dispatch(Actions.incrementCountAsync());
  };

  const decrementCountAsyncHdl = (): void => {
    dispatch(Actions.decrementCountAsync());
  };

  const incrementAssignAsyncCountHdl = (): void => {
    const inputCount = prompt('请输入需要增加的计数');
    const valid = _validateCount(inputCount);
    if (!valid) return;
    dispatch(Actions.incrementAssignCountAsync(Number(inputCount)));
  };

  const _validateCount = (inputCount: string | null): boolean => {
    if (inputCount === null) {
      alert('取消已操作');
      return false;
    }
    if (inputCount === '') {
      alert('不能输入空字符');
      return false;
    }
    if (!/^-?[1-9]\d*$/.test(inputCount)) {
      alert('不能输入非整数字符');
      return false;
    }
    return true;
  };

  return (
    <CountStyle>
      <div className="count-wrap__operates">
        <button onClick={incrementCountHdl}>增加</button>
        <button onClick={decrementCountHdl}>减少</button>
        <button onClick={incrementAssignCountHdl}>增加给定</button>
        <button onClick={incrementCountAsyncHdl}>异步增加</button>
        <button onClick={decrementCountAsyncHdl}>异步减少</button>
        <button onClick={incrementAssignAsyncCountHdl}>异步增加给定</button>
      </div>
      <div className="count-wrap__result">Count: {count}</div>
    </CountStyle>
  );
};

export default React.memo(Count);
