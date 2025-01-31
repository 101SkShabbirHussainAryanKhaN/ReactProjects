// App.js
import React from 'react';
import './App.css'
import ProductList from './components/ProductList';
import ShoppingCard from './components/ShoppingCard';
import SuperCoin from './Components/SuperCoin'
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCard />
        <SuperCoin />

      </div>

  );
};

export default App;
