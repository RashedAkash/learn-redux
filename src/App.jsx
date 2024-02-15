import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';

function App() {
 const count = useSelector((state) => state.counter.value);
 const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>increment</button>
      <h1>{count}</h1>
      <button>decrement</button>
    </>
  );
}

export default App
