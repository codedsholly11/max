import React, { useState } from 'react'
import brandlogo from '../../src/images/brandlogo.png'
import { GrMenu } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menu, setMenu] =useState(false)
      function handleMenu(){
        setMenu(!menu)
      }
  
  return (
    <div className='w-[100%]'>
      <nav className='w-[100%] flex items-center justify-between md:px-[70px] px-[20px] py-[15px] border-b-2'>
          <div>
            <img src={brandlogo} alt="" />
          </div>
          <div className='md:flex gap-[20vw] hidden'>
              <ul className='flex gap-[30px] '>
                <li>About us</li>
                <li>Team</li>
                <li>Solution</li>
                <li>Blog</li>
              </ul>
              
              <div>
                <button className='border-2 px-[10px] py-[4px] rounded-full'>Get in touch</button>
              
              </div>
          </div>
          <div>
            <button onClick={handleMenu} className='flex md:hidden text-black font-bold text-[30px] '>{menu ?<VscChromeClose/> : <GrMenu/>}</button>
          </div>
      </nav>
      {menu&&
       <ul className={`flex bg-purple-300 gap-[5px] flex-col top-0 absolute${menu ?'top-14': '-top-full'} items-center text-xl font-bold py-[5px] transition-all duration-1000 ease-out hover:ease-in`}>
       <li>About us</li>
       <li>Team</li>
       <li>Solution</li>
       <li>Blog</li>
     </ul>

      }
    
           
    </div>
           
       
    
    
  )
}

export default Nav
