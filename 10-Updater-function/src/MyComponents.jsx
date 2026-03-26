import React, { useState } from "react";

const MyComponents = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);  // This won`t work 
    setCount(count=> count+1)  // this will work because multiple state update
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponents;
