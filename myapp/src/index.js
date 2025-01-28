import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './components/Product';
import StudentList from './components/StudentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Product title= "Laptop" price = "75000">
        <button>Buy Now</button>
    </Product>
    <Product title= "Mobile Phone" price="33000" >
        <button>Buy Now</button>
    </Product>
    <Product title= "HeadPhone" price="600" >
        <button>Buy Now</button>
    </Product>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
