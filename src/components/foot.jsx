import React from 'react'
import Stars from '../images/Stars.png'

const foot = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[40px] pt-[50px]'>
        <div className='flex flex-col gap-3 text-center'>
            <h2 className='md:text-6xl text-3xl font-bold'>What our customers say</h2>
            <p>Thousands of happy customers that changed their energy use </p>
        </div>
        <div className='flex flex-col items-center gap-[40px]'>
           <div className='md:w-[55%] h-[30vh] border-2 flex flex-col items-center justify-center text-center rounded-lg px-[40px]'>
                <div className='flex flex-col items-center gap-3 '>
                    <img className='w-[100px] ' src={Stars} alt="" />
                    <h3 className=' text-2xl font-semibold'>“Flow transformed my energy use. Efficient, green tech, outstanding service!”</h3>
                </div>
                <div>
                    <h4>Jenny Wilson</h4>
                    <p>Solar energy service</p>
                </div>
           </div>
            <div className='bg-green-950 flex flex-col md:flex-row md:px-[40px] w-[100vw] py-[20px] gap-[20px] items-center justify-between md:h-[25vh]  '>
                    <div>
                        <p className='text-white md:w-[70%] md:text-5xl text-3xl text-center md:text-start font-bold'>Your Source for Green Energy Updates</p>
                    </div>
                    <div className='flex gap-2 flex-col md:flex-row'>
                        <input className='md:w-[30vw] h-[40px] rounded-full pl-5' type="text"placeholder='Enter your mail' />
                        <button className='bg-green-400 h-[40px] md:w-[10vw] w-[90vw] rounded-full'>Get in touch</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default foot
