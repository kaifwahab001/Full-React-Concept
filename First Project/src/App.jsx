import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
    const users = [
    {
      id:0,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Senior Product Designer',
      tag: 'UX / UI'
    },
    {
      id:1,
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Full Stack Developer',
      tag: 'Engineering'
    },
    {
      id:2,
      img: 'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Marketing Strategist',
      tag: 'Growth'
    },
    {
      id:3,
      img: 'https://images.unsplash.com/photo-1752170080622-18196de87763?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Marketing Strategist',
      tag: 'Growth'
    },
    {
      id:4,
      img: 'https://images.unsplash.com/photo-1635766854898-ad3766e5f5e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: 'Marketing Strategist',
      tag: 'Growth'
    },
  ]



  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App