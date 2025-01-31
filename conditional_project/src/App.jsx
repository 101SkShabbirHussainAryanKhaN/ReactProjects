import { useState } from 'react'
import './App.css'
import Logout from './Components/Logout';
import LoginButton from './Components/LoginButton';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // By using logical operator
  // if(!isLoggedIn)
  // {
  //   render(
  //     <>
  //     <h1>Hello There where to Login Button</h1>
  //     <LoginButton />
  //     </>
  //   )
  // }
  // render(
  //   <>
  //     <h1>Hello There where to LogOut Button</h1>
  //     {isLoggedIn && <Logout />}
  //   </>
  // )
  render(
    <>
    {/* By using ternary operator same logic */}
    {isLoggedIn ? <Logout /> : <LoginButton/>}
    </>
  )
// By using if else conditional it's perfectly working
// if(isLoggedIn){
//   return (
//     <>
//      <LoginButton />
//     </>
//   )}
//   else
//   {
//   return(
//     <>
//     <Logout />
//     </>
// )
// }
}

export default App
