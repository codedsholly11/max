import React from 'react'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'

const body = () => {
  return (
    <div>
      <div className='border-b-2 border-grey-400 border-t-2 border-gray-300 md:h-[80px] flex md:flex-row flex-col gap-3 items-center justify-between md:px-[70px] py-[20px]  '>
        <p className='md:font-semibold md:text-sm text-2xl font-bold'>Global partners that trusted us</p>
        <img className='w-[50%] md:w-[10vw]' src={logo1} alt="" />
        <img className='w-[50%] md:w-[10vw]' src={logo2} alt="" />
        <img className='w-[50%] md:w-[10vw]' src={logo3} alt="" />
        <img className='w-[50%] md:w-[10vw]' src={logo4} alt="" />
      </div>
      <div></div>
      <div></div>
      
    </div>
  )
}

export default body
