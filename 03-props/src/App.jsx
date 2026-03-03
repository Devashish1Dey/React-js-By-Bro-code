import React from 'react'
import Student from './Students'

const App = () => {
  return (
    <div>
      <Student name="Rohan" age={30} isStudent={true} />
      <Student name="Mohan" age={25} isStudent={false} />
      <Student name="Karan" age={15} isStudent={true} />
      <Student name="Vijay" age={30} isStudent={true} />
      <Student  />
    </div>
  )
}

export default App
