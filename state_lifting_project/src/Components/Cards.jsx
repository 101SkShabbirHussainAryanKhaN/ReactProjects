import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setName(e.target.value)} placeholder='Enter a text here'/>
      <h1>Name variable value inside cards is {props.title}: {props.name}</h1>
    </div>
  )
}

export default Cards
