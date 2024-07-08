import React from 'react'
import Nav from './components/nav'
import Profile from './components/property/Profile'
import Hero from './components/hero'
import Body from './components/body'
import Section from './components/section'
import Profiles from './components/property 2/profiles'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Body/>
      <Profile />
      <Section/>
      <Profiles/>
      
    </div>
  )
}

export default App

