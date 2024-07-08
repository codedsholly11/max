import React from 'react'
import window from '../images/window.png' 
import window2 from '../images/window2.png'
import window3 from '../images/window3.png'
import window4 from '../images/window4.png'
import window5 from '../images/window5.png'


const section = () => {
  return (
    <div>
        <div className='flex gap-[] px-[70px] py-[30px]'>
            <div className='w-[45%]'>
                <h2 className='text-3xl'>About us</h2>
            </div>
            <div className='w-[45%] flex flex-col gap-5'>
                <p>At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.</p>
                <button className='bg-green-400 rounded-full px-[12px] w-[10vw] h-[6vh]'>Read more</button>
            </div>
        </div>
        <div className='flex gap-5'>
            <img className='h-[53vh]' src={window} alt="" />
            <img className='h-[53vh]' src={window2} alt="" />
            <img className='h-[53vh]' src={window3} alt="" />
            <img className='h-[53vh]' src={window4} alt="" />
            <img className='h-[53vh]' src={window5} alt="" />
        </div>
        <div className='flex items-center justify-between px-[70px] py-[60px]'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>5,000 Mwh</h2>
            <p className='text-sm'>Renewable Energy Generated</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>2,500+</h2>
            <p className='text-sm'>Metric Tons of CO2 Reduced</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>10,000+</h2>
            <p className='text-sm'>Customers Served</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl'>15%</h2>
            <p className='text-sm'>Avg. Energy Saved</p>
          </div>

        </div>
      
    </div>
  )
}

export default section

