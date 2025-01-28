// Understand the concept of hooks with useState 
import React, { useState } from 'react';
import '../Components/Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCountClick = () => {
    setCount(count + 1);
    setTotal(total + 1);
  };

  const handleLikeClick = () => {
    setLike(like + 1);
    setTotal(total + 1);
  };

  return (
    <div className="counter-container">
      <p id="count">You have clicked {count} times</p>
      <button id="iterator" onClick={handleCountClick}>Click me</button>
      
      <p id="liker">You have clicked {like} times</p>
      <button id="like-it" onClick={handleLikeClick}>Click me</button>
      
      <p id="total-it">Total Counting is {total}</p>
    </div>
  );
};

export default Counter;
