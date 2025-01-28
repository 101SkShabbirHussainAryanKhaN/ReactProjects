import { useState } from 'react'
import ContentRating from "./Components/ContentRating"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContentRating/>
    </>
  )
}

export default App
