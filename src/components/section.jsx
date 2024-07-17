import React from 'react'
import window from '../images/window.png' 
import window2 from '../images/window2.png'
import window3 from '../images/window3.png'
import window4 from '../images/window4.png'
import window5 from '../images/window5.png'


const section = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row gap-[] md:px-[70px] py-[30px] text-center md:text-start items-center md:items-start'>
            <div className='md:w-[45%]'>
                <h2 className='text-3xl font-semibold'>About us</h2>
            </div>
            <div className='md:w-[45%] w-[90vw] flex flex-col gap-5'>
                <p>At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.</p>
                <button className='bg-green-400 rounded-full px-[12px] md:w-[10vw] h-[6vh]'>Read more</button>
            </div>
        </div>
        <div className='flex gap-5 flex-col md:flex-row w-[100%] items-center'>
            <img className='h-[53vh] w-[80vw]' src={window} alt="" />
            <img className='h-[53vh]' src={window2} alt="" />
            <img className='h-[53vh]' src={window3} alt="" />
            <img className='h-[53vh]' src={window4} alt="" />
            <img className='h-[53vh] w-[80vw]' src={window5} alt="" />
        </div>
        <div className='flex md:flex-row items-center justify-between md:px-[70px] py-[60px] flex-col text-center gap-7'>
          <div className='flex flex-col gap-1'>
            <h2 className='text-4xl'>5,000 Mwh</h2>
            <p className='md:text-sm text-xl'>Renewable Energy Generated</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-4xl'>2,500+</h2>
            <p className='md:text-sm text-xl'>Metric Tons of CO2 Reduced</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-4xl'>10,000+</h2>
            <p className='md:text-sm text-xl'>Customers Served</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-4xl'>15%</h2>
            <p className='md:text-sm text-xl'>Avg. Energy Saved</p>
          </div>

        </div>
      
    </div>
  )
}

export default section

