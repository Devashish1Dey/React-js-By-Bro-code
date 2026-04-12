import React from 'react'
import ComponentB from './ComponentB'
import { useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext()

const ComponentA = () => {

    const [user, setUser] = useState("Rahul")
  return (
    <div className='box'>
      <h1>ComponentA</h1>
      <h2>{user}</h2>
      <UserContext.Provider value={user}>
      <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
