import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    document.write('Button is being clicked!')
  }
  function handleMouseOver(){
    document.write('Want to know more about Sk Shabbir Hussain...')
  }
  function handleChanging(e){
    let a = e.target.value;
    alert(a)
  }
  function handleSubmit(e){
    e.preventDefault();
    alert('Are you Sure!')
  }

  return (
    <>
     Hello jee, Welcome to Sk Techture
     <p onMouseOver={handleMouseOver}>
      shabbir Hussain
     </p>
     <button onClick={()=>{document.write('Hello')}}>
      click here!
     </button>
     <button onClick={handleClick}>
        click me!
     </button>
     <form onSubmit={handleSubmit}>
     <input type="text" onChange={handleChanging} />
     <button>Submit</button>
     </form>
    </>
  )
}

export default App
