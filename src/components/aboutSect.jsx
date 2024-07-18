import React from 'react'
import image9 from '../images/Image-9.png'

const AboutSect  = () => {
  return (
    <div className='flex flex-col gap-[50px] px-[70px] items-center justify-center py-[30px]'>
      <div className='flex flex-col text-center gap-[15px]'>
        <h1 className='text-4xl font-semibold'>Discorver Our Story. Who We Are And What We Stand For</h1>
        <p>Get To Know Our Team And Our Mission To Provide Exeptional Service And product.</p>
      </div>
      <div className='flex gap-[50px]'>
        <img className='w-[40vw]' src={image9} alt="" />
        <div className='flex flex-col gap-[30px]'>
          <h1 className='text-4xl font-bold'>Our Mission</h1>
          <p>At Toshconsult Technologies Inc, our mission is to empower businesses, individuals, and aspiring tech professionals with innovative software solutions and training programs that drive success. We are committed to delivering exceptional service and quality products in website design, web development, app development, and all aspects of software development, while also providing accessible and comprehensive education to help people transition to tech careers. Our goal is to foster a culture of creativity, collaboration, and lifelong learning that inspires our team and our clients to achieve their full potential.</p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutSect 
