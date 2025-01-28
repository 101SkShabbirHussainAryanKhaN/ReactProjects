import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import StudentList from './components/StudentList';
import Product from './components/Product';
import { useEffect, useState } from 'react';

function App() {
  // let myName = "SK shabbir Hussain Aryana Sheen";
  
  const [myName, setData] = useState("SK shabbir Hussain");

  const clickHandler = ()=>{
    setData("SK Aryana Sheen");
    console.log("SK")
  }
  useEffect(()=>{
    console.log("Hi baby SMS")
  },[myName])
  return (
    <div>
            <h1>{myName}</h1>
            <button onClick={clickHandler}>ChangeContent</button>
      {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/Student-list' element={<StudentList />}></Route>
       

        
      </Routes>
      </BrowserRouter> */}

    </div>
      
  );
}

export default App;
