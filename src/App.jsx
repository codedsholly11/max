import React from 'react'
import Nav from './components/nav'
import Profile from './components/property/Profile'
import Hero from './components/hero'
import Body from './components/body'
import Section from './components/section'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Body/>
      <Profile />
      <Section/>
      
    </div>
  )
}

export default App

