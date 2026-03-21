import React from 'react'

const Button = () => {

    let count = 0
    const handleClick = (name)=>{
        if(count < 3){
            count++
            console.log(` ${name} you clicked me ${count} times`)
        }else{
          console.log(`${name} stop clicking me!`)
        }
    }

    const handleClick2 = (name)=>{
        console.log(`${name} stop clicking me`)
    }

    const handleClicked = (e)=> e.target.textContent = 'OUCH! 😠'
    
  return (
    <div>
      {/* <button onClick={()=>{handleClick2('rahul')}}>Click me 😊</button> */}
      {/* <button onClick={() => handleClick('aman')}>Click me 😊</button> */}
      <button onDoubleClick={(e) => handleClicked(e)}>Click me 😊</button>
    </div>
  )
}

export default Button
