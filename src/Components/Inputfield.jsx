import React from 'react'

const Inputfield = ({label,value ,setTextInput }) => {
  return (
    <div>
        <label htmlFor={label}>{label} </label>
        <textarea  id={label} cols="30" rows="10" value={value} onChange={(e)=>setTextInput(e.target.value)}></textarea>
    </div>
  )
}

export default Inputfield