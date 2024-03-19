import React from 'react'


const Dropdown = ({label,lang,setfun}) => {
  return (
    <div className=''>
        <label htmlFor={label}>{label} :</label>
        <select  className='border-2 ml-4 rounded w-auto' onChange={(e) => setfun(e.target.value)} id={label} >
        <option value="none" selected disabled hidden>Select Language</option> 
            {Object.entries(lang).map(([Language, Languagecode])=>{
              // console.log(items);
                return(

                    <option key={Languagecode} value={Languagecode}>{Language}</option>
                )
            })}
        </select>
    </div>
  )
}

export default Dropdown