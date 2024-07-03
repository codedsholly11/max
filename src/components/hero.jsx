import React from 'react'
import small from '../images/small.png'
import poster from '../images/poster.png'


const hero = () => {
  return (
    <div className='flex items-center justify-between px-[70px]'>
        <div className='flex flex-col gap-8 w-[40%]'>
            <div className='flex gap-3'>
                <img src= {small}alt="" />
                <p>Powering Tomorrow</p>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='text-6xl font-bold'>The Future of Green Energy</h1>
                <p>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
            </div>
            <div className='flex gap-5'>
                <button className='bg-green-950 rounded-full text-white text-sm px-[12px] '>See our solution</button>
                <button className='border-2 border-black rounded-full px-[15px]'>Get in touch</button>
            </div>
        </div>
        <div>
             <img className='h-[70vh]' src={poster} alt="" />
        </div>
        
    </div>
      

  )
}

export default hero
