import React from 'react'

const profileprops = (props) => {
  return (
    <div className='flex'>
        <img className='w-[60vw]' src={props.pix} alt="pix" />
        {/* <h2>{props.name}</h2> */}
        {/* <p>{props.paragraph}</p> */}

      
    </div>
  )
}

export default profileprops
