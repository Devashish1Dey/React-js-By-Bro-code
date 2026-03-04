import React from 'react'
import UserGreeting from './UserGreeting'

const App = () => {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="John" />
      
    </div>
  )
}

export default App
