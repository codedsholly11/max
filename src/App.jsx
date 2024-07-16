import React from 'react'
import Nav from './components/nav'
import Profile from './components/property/Profile'
import Hero from './components/hero'
import Body from './components/body'
import Section from './components/section'
import Profiles from './components/property 2/profiles'
import Blog from './components/blog'
import Profiler from './components/property 3/profiler'
import Api from './components/Api'
import Faq from './components/faq'
import Foot from './components/foot'
import Footer from './components/footer'

const App = () => {
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

          {/* <Api /> */}
      
    </div>
  )
}

export default App

