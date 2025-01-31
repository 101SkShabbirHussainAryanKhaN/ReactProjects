import React from 'react'

import '../Components/UserCards.css'
import Footer from './Footer'
const UserCards = (props) => {
  return (
    <>
    
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-image' src={props.image} alt={props.name}></img>
      <p id='user-desc'>{props.desc}</p>
      <button id='btn'>Contact</button>
    </div>
    </>
  )
}
export default UserCards
