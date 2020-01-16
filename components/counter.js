import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../store';

function Counter() {
  const count = useSelector(state => state.count);

  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch(incrementCount());
  }, []);

  const decrement = useCallback(() => {
    dispatch(decrementCount());
  }, []);

  const reset = useCallback(() => {
    dispatch(resetCount());
  }, []);

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
