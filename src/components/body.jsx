import React from 'react'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'

const body = () => {
  return (
    <div>
      <div className='border-b-2 border-grey-400 border-t-2 border-gray-300 h-[80px] flex items-center justify-between px-[70px]'>
        <p className='font-semibold'>Global partners that trusted us</p>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
      <div></div>
      <div></div>
      
    </div>
  )
}

export default body
