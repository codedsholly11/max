import React from 'react'
import Nav from './nav'
import Profile from './property/Profile'
import Hero from './hero'
import Body from './body'
import Section from './section'
import Profiles from './property 2/profiles'
import Blog from './blog'
import Profiler from './property 3/profiler'
import Faq from './faq'
import Foot from './foot'
import Footer from './footer'

const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Body/>
      <Profile />
      <Section/>
      <Profiles/>
      <Blog/>
      <Profiler/>
      <Faq/>
      <Foot/>
      <Footer/>

      
    </div>
  )
}

export default LandingPage

