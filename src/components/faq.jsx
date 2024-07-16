import React from 'react'
import saq from '../images/saq.png'

const faq = () => {
  return (
    <div className='bg-red-50 md:px-[70px]  flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-3 items-center justify-center py-[30px] '>
            <h1 className='text-3xl font-semibold '>FAQ</h1>
            <p className='text-center px-[15px]'>Here you will find the answers to the frequently asked questions.</p>
        </div>
        <div className='flex gap-5 flex-col md:flex-row'>
            <div className='flex flex-col gap-3'>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>what is energy?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>How does green energy benefit the environment?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>What green energy solutions does your company offer?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>What support services do you offer after installing green energy solutions?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>How do solar panels work?</p>
                    <button>+</button>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>What is green energy?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>How does green energy benefit the environment?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>What green energy solutions does your company offer?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>What support services do you offer after installing green energy solutions?</p>
                    <button>+</button>
                </div>
                <div className='bg-white md:w-[44vw] w-[90vw] rounded-xl flex justify-between px-[20px] py-[10px]'>
                    <p>How do solar panels work?</p>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center py-[50px] gap-4 md:w-[40vw] text-center px-[15px] '>
            <img src={saq} alt="" />
            <h2 className='md:font-semibold font-bold text-2xl'>Still have questions?</h2>
            <p>For assistance, please visit our Contact Us page or call our customer support hotline at (671) 555-0110. Our dedicated team is ready to help you on your journey to a greener, more sustainable future.</p>

        </div>
      
    </div>
  )
}

export default faq
