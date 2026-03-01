import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <img className='card-image' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile picture" />
      <h2 className='card-title'>Nature</h2>
      <p className='card-text'>Nature is beautiful.</p>
    </div>
  )
}

export default Card
