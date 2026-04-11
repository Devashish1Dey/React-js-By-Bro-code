import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [colour, setColour] = useState("green")

  useEffect(() => {
    document.title = `count: ${count} ${colour}`

    // return () => {}
  }, [count, colour])
  

  function addCount(){
    setCount(c => c + 1)
  }

  function subCount(){
    setCount(c => c - 1)
  }

  function changeColour(){
    setColour(c => c === "green" ? "red" : "green")
  }
  return (
    <div>
      <p style={{color: colour}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Sub</button> <br />
      <button onClick={changeColour}>Change Colour</button>
    </div>
  )
}

export default App
