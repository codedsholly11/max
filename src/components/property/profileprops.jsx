import React from 'react'

const profileprops = (props) => {
  return (
    <div>
      <img className='image' src={props.pic} alt="pic" />
      <h1 className='text-2xl'>{props.name}</h1>
      <p className='text-sm'>{props.paragraph}</p>
      <p className='font-semibold'>{props.read}</p>
    </div>
  )
}

export default profileprops
