import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards';


function App() {
  // Create state
  // Manage state
  // Change state
  // state will be sync in all childs
  const [name, setName] = useState('');
  return (
    <>
      <Cards title="Card1" name={name} setName={setName} />
      <Cards title="Card2" name={name} setName={setName} />
      <h1>Name variable value inside parents is : {name}</h1>
    </>
  )
}

export default App
