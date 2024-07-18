import React from "react"
import LandingPage from "./components/landingPage"
import About from "./components/about"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element ={<LandingPage/>} />
            <Route path="/about" element = {<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

