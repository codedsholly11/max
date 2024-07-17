import React from 'react'
import Profileprops from '../property/profileprops'
import shol from '../../images/ev charging (1).png'
import solar from '../../images/solar.png'
import wind from '../../images/wind.png'
import hydro from '../../images/hydro.png'
import small from "../../images/small.png"


const Profile = () => {
  return (
    <div className='flex flex-col gap-[30px] md:px-[70px] py-[50px] mt-[50px] bg-red-50 pt-[20px] items-center md:items-start m-[10px] rounded-lg'>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-3 border-b-2 border-grey-900 px-[20px] '>
                <img className='w-[30px] ' src={small} alt="" />
                <p className='md:w-[75vw] w-[60vw]'>Solution</p>
            </div>
            
            <h3 className='text-2xl px-[20px] text-center md:text-start'>Key to clean future</h3>
        </div>
        <div className='flex flex-col md:flex-row  gap-10 w-[90%] px-[20px]'>
            <div className='flex flex-col gap-10'>
                <Profileprops
                    read='Read more'
                    paragraph= 'EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.'
                    pic={shol} 
                    name='EV charging'
                />

                <Profileprops
                    read='Read more'
                    paragraph= 'Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.'
                    pic={wind} 
                    name='Wind Energy'
                />
            </div>

            <div className='flex flex-col gap-10 '>
                <Profileprops
                    read='Read more'
                    paragraph= 'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.'
                    pic={solar} 
                    name='Solar Energy'
                />

                <Profileprops
                    read='Read more'
                    paragraph= 'This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It  s one of the oldest forms of renewable energy.'
                    pic={hydro} 
                    name='Hydro Power'
                />
            </div>
        </div>

    

       
    </div>
  )
}

export default Profile
