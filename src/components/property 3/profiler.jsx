import React from 'react'
import Profileprops from '../property 3/profileprops'
import info2 from '../../images/info1.png'
import window2 from '../../images/window2.png'
import image7 from '../../images/Image-7.png'
import info1 from '../../images/info1.png'
import windpower from '../../images/windpower.png'
import info3 from '../../images/info3.png'
import image9 from '../../images/Image-9.png'





const Profiler = () => {
  return (
  <div className='flex md:px-[70px] gap-[30px] flex-col md:flex-row items-center md:items-start '>
    <div className='flex flex-col md:w-[55%] w-[80%] '>
      <div>
        <img src={image9} alt="" />

      </div>
      <div className='flex flex-col gap-4'>
          <div className='flex gap-[20px] pt-[20px] flex-col md:flex-row'>
            <button className='border-2 border-gray-900 rounded-full px-[10px] h-[6vh]'>Solar Power</button>
            <button className='border-2 border-gray-900 rounded-full px-[10px] h-[6vh]'>Solutions</button>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='md:text-4xl text-3xl md:text-start text-center'>Harnessing the Power of the Sun: Exploring the World of Solar Energy</h2>
            <p className='text-center md:text-start'>Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.</p>
            <img className='h-[30px] w-[200px] items-center' src={info3} alt="" />
          </div>
      </div>
    </div>
    <div className='flex flex-col gap-7 md:w-[45%] w-[80%] py-[30px]'>
      <Profileprops
          picture = {windpower}
          paragraph = 'Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts'
          pix = {info1}
      />
      
      <Profileprops
          picture = {image7}
          paragraph = 'From Trash to Treasure: The Promising World of Biomass Energy'
          pix = {info2}
      />

      <Profileprops
          picture = {window2}
          paragraph = 'Hydrogen: Fueling the Green Energy Revolution'
          pix = {info3}
      />  
    </div>
  </div>
  )
}

export default Profiler
