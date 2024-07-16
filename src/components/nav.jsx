import React, { useState } from 'react'
import logo from '../../src/images/logo.png'
import { GrMenu } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";

const Nav = () => {
  const [menu, setMenu] =useState(false)
  
  return (
    <div className='flex items-center justify-between px-[70px] h-[50px] border-b-2 border-gray-200'>
        <div className='flex gap-3'>
            <img src={logo} alt="" />
            <h1 className='text-2xl font-bold'>FLOW</h1>
        </div>
        <div className='md:flex items-center justify-center gap-5 hidden'>
            <p>About Us</p>
            <p>Team</p>
            <p>Solution</p>
            <p>Blog</p>
        </div>
        <button className='border-2 border-black rounded-full px-[20px] md:flex hidden'>Get in touch</button>

        <div className='md:hidden'>
          {menu?<VscChromeClose />:<GrMenu />}
        </div>
        {/* {
              <div className={``}>
                 <p>About Us</p>
                 <p>Team</p>
                 <p>Solution</p>
                 <p>Blog</p>
             </div>
        } */}
      
    </div>
  )
}

export default Nav
