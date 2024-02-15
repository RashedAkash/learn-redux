import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function App() {
 const count = useSelector((state) => state.counter.value);
 const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(incrementByAmount(5))}>increment 5</button>
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
}

export default App
