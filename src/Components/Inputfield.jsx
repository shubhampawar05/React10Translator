import React from 'react'

const Inputfield = ({label,value ,setTextInput }) => {
  return (
    <div className='text-center '>
        <label htmlFor={label}>{label} </label>
        <textarea className='border ml-4'  id={label} cols="30" rows="2" value={value} onChange={(e)=>setTextInput(e.target.value)}></textarea>
    </div>
  )
}

export default Inputfield