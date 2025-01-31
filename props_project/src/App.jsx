import React, { useState } from 'react';
import './App.css'
import Cards from './Components/Cards'
import Button from './Components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Button incrementalCounter={handleClick} text="Click me">
          <h1>{count}</h1>
      </Button>
      <Cards>
        <h1>Sk Shabbir Hussain</h1>
        <p>Consistency Matters Alot</p>
        <p>Will be competent while learning.</p>
      </Cards>
      <Cards>
        <h1>Shakir Ali</h1>
      </Cards>
    </>
  )
}

export default App
