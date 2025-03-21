// App.tsx
import React from 'react';
import './App.css';
import useCounterStore from './store/counterStore';

const App: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="full-width">
      <div className="container">
        <h1>Counter App</h1>
        <div className="counter">
          <button className="btn decrement" onClick={decrement}>
            −
          </button>
          <span>{count}</span>
          <button className="btn increment" onClick={increment}>
            +
          </button>
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
