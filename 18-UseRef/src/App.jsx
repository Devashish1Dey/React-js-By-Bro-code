import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const App = () => {

  // const [number, setNumber] = useState(0)
  // const ref = useRef(0)
  const inputRef1 = useRef(null)
  const inputRef2= useRef(null)
  const inputRef3= useRef(null)

  useEffect(() => {
    console.log("Components Rendered");
    // console.log(inputRef);
  })

  function handleClick1(){
    // setNumber(n => n+1)
    // ref.current++
    // console.log(ref.current);
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = "yellow"
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""
  }
  function handleClick2(){
    inputRef2.current.focus()
    inputRef2.current.style.backgroundColor = "yellow"
    inputRef1.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""
  }
  function handleClick3(){
    inputRef3.current.focus()
    inputRef3.current.style.backgroundColor = "yellow"
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = ""
  }
  return (
    <div>
      <button onClick={handleClick1}>Click me 1</button>
      <input type="text" ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2</button>
      <input type="text" ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3</button>
      <input type="text" ref={inputRef3} />
    </div>
  )
}

export default App
