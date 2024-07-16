import React from 'react'
import small from '../images/small.png'
import poster from '../images/poster.png'


const hero = () => {
  return (
    <div className='md:flex-row flex flex-col items-center justify-between md:px-[70px]'>
        <div className='flex flex-col gap-8 md:w-[40%] w-[90%]'>
            <div className='flex gap-3'>
                <img className='md:w-[20px] ' src= {small}alt="" />
                <p>Powering Tomorrow</p>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-5 w-[]'>
                    <h1 className='md:text-6xl text-5xl font-bold  '>The Future Of Green Energy</h1>
                    <p className='text-center md:text-start'>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
                </div>
                <div className='flex md:flex-row gap-5 flex-col'>
                    <button className='bg-green-950 rounded-full text-white text-sm md:h-[5vh] px-[12px] h-[7vh] '>See our solution</button>
                    <button className='border-2 border-black rounded-full px-[15px] md:h-[5vh] h-[7vh]'>Get in touch</button>
                </div>
            </div>

            
        </div>
        <div>
             <img className='h-[70vh]' src={poster} alt="" />
        </div>
        
    </div>
      

  )
}

export default hero
