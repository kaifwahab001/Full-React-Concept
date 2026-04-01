import React from 'react'

const App = () => {

  localStorage.setItem('user', JSON.stringify({'user':'kaif','age':21}))
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user.user,user.age );
  
  
  return (
    <div>App</div>
  )
}

export default App