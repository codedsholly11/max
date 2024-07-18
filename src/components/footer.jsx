import React from 'react'
import brandlogo from '../images/brandlogo.png'
import face from '../images/face.png'
import linkdin from '../images/linkdin.png'
import insta from '../images/insta.png'

const Footer = () => {
  return (
    <div className='w-[100%] md:bg-purple-300 bg-green-200 flex flex-col md:flex-row md:items-start gap-4 items-center justify-between px-[70px] py-[10vh]'>
       
            <div className='w-[100%]'>
                <img src={brandlogo} alt="" />
            </div>
    
            <div className='w-[100%]'>
                <ul className='flex flex-col text-start gap-4'>
                    <li>Platform</li>
                    <li>Solution</li>
                    <li>How it works</li>
                    <li>Pricing</li>
                </ul>

            </div>
            <div className='w-[100%]'>
                <ul className='flex flex-col text-start gap-4'>
                    <li>Company</li>
                    <li>About</li>
                    <li>Career <span>HIRING</span></li>
                    <li>Our Mission</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='w-[100%]'>
                <ul className='flex flex-col  gap-4'>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Help Center</li>
                    <li>Support</li>
                </ul>
            </div>
       
        <div className='flex md:flex-col gap-[20px] w-[100%] items-center'>
            <div className='flex gap-2 items-center'>
                <img src={face} alt="" />
                <p className='md:flex hidden'>Follow us on Facebook</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={insta} alt="" />
                <p className='md:flex hidden'>Follow us on Instagram</p>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={linkdin} alt="" />
                <p className='md:flex hidden'>Follow us on LinkedIn</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
