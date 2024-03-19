import React from 'react'


const Dropdown = ({label,lang,setfun}) => {
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <select  onChange={(e) => setfun(e.target.value)} id={label} >
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