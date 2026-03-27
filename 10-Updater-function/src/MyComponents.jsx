import React, { useState } from "react";

const MyComponents = () => {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({year: 2024, make: "Ford", model:"Mustang"})

  function handleYearChange(event){
      // setCar({...car, year: event.target.value}) // or we can also do like this
      setCar(c => ({...c, year: event.target.value}))
  }

  function handleMakeChange(event){
    setCar(c => ({...c, make: event.target.value}))
  }

  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}))
  }

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
      {/* <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button> */}

      <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange} /><br/>
      <input type="text" value={car.make} onChange={handleMakeChange} /><br/>
      <input type="text" value={car.model} onChange={handleModelChange} /><br/>
    </div>
  );
};

export default MyComponents;
