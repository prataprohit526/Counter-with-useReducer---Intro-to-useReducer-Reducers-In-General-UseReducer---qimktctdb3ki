import React, { useReducer } from 'react';
import counterReducer from './reducers/counterReducer';

function CounterApp() {
  const [counterState, dispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <span id="counter">{counterState}</span>
      <button id="increment-btn" onClick={handleIncrement}>Increment</button>
      <button id="decrement-btn" onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;
