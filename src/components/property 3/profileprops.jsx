import React from 'react'


const Profileprops = (props) => {
  return (
    <div className='flex gap-[20px] flex-col md:flex-row '>
        <img className='md:w-[23%] w-[] h-[150px] flex gap-[px] ' src={props.picture} alt="picture" />
       <div>
            <p className='text-2xl text-center'>{props.paragraph}</p>
            <img  src={props.pix} alt="pix" />
       </div>
        
    
      
    </div>
  )
}

export default Profileprops
