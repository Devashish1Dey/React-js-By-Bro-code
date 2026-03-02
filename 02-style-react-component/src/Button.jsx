import React from 'react'

// styling can be done in 3-ways in react
// 1.EXTERNAL css file     (Button.css or index.css)
// 2.MODULES     (Button.module.css)
// 3.INLINE     (style={{}})  -- we can pass an object to the style attribute like in the below example

const Button = () => {

  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  }
  return (
    <div>
      <button style={styles}>Click me</button>

    </div>
  )
}

export default Button
