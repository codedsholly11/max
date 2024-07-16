import React from 'react'
import Profileprops from '../property 2/profileprops'
import team1 from '../../images/team1.png'
import Team2 from '../../images/Team2.png'
import Team3 from '../../images/Team3.png'
import Team4 from '../../images/Team4.png'


const profile = () => {
  return (
    <div className='pl-[70px] flex flex-col gap-6'>
        <div className=' flex flex-col gap-3 items-center md:items-start'>
          <h2 className='text-4xl font-semibold'>Meet our expert</h2>
          <p className='text-center md:text-start'>our team boast of top green energy experts, driving innovation in sustainability.</p>
        </div>
        <div className='flex gap-[20px] flex-col md:flex-row '>
          <Profileprops
            pix={team1}
            />

          <Profileprops
            pix={Team2}
            />

          <Profileprops
            pix={Team3}
            />

          <Profileprops
            pix={Team4}
            />


        </div>
      
    </div>
  )
}

export default profile
