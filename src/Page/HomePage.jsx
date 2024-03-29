import React, { useState } from 'react'
import axios from 'axios';
import Dropdown from '../Components/Dropdown';
import { Data } from './../assets/Data'
import Inputfield from '../Components/Inputfield';

const HomePage = () => {
    const[sourcelang, setSourcelang] = useState('');
    const[targetlang, setTargetlang] = useState('');
    const[textinput, setTextInput] = useState('');
    const[result, setResult] = useState('');

    
    const apiFetching = async()=>{
         const encodedParams = new URLSearchParams();
          encodedParams.set('source_language', sourcelang);
          encodedParams.set('target_language', targetlang);
          encodedParams.set('text', textinput);
          
          const options = {
            method: 'POST',
            url: 'https://text-translator2.p.rapidapi.com/translate',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'X-RapidAPI-Key': '5301b9458fmsh4401021537ec1e9p162840jsn006cb36c1317',
              'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            data: encodedParams,
          };
          
          try {
            const response = await axios.request(options);
            const finalData = response.data;
            console.log(finalData)
      
            if (finalData.status === "success") {
                const converteddata = JSON.parse(`"${finalData.data.translatedText}"`);
                setResult(converteddata);
                console.log(converteddata);
            } else {
                setResult("Translation failed.");
            }
          } catch (error) {
            console.error("Error:", error);
            setResult("Error occurred during translation.");
          }


        //   const encodedParams = new URLSearchParams();
        //   encodedParams.set('source_language', 'en');
        //   encodedParams.set('target_language', 'id');
        //   encodedParams.set('text', textinput);
          
        //   const options = {
        //     method: 'POST',
        //     url: 'https://text-translator2.p.rapidapi.com/translate',
        //     headers: {
        //       'content-type': 'application/x-www-form-urlencoded',
        //       'X-RapidAPI-Key': '5301b9458fmsh4401021537ec1e9p162840jsn006cb36c1317',
        //       'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        //     },
        //     data: encodedParams,
        //   };
          
        //   try {
        //       const response = await axios.request(options);
        //       console.log(response.data);
        //   } catch (error) {
        //       console.error(error);
        //   }    
    }
  

  return (
    <section className='max-w-screen-xl mx-auto'>
        <div className='flex justify-center align-middle'>
            <div className=' shadow-slate-600 text-center mt-8 border-2 px-8 py-4 mb-4'>
                <h1 className='text-3xl font-bold mb-4 '>Language Translator</h1>
                <Dropdown label={"source Language"} lang={Data} setfun={setSourcelang}/>
                <br />
                <Dropdown label={"target Language"} lang={Data} setfun={setTargetlang}/>
                <br />
                <Inputfield  label={"write here"}  value={textinput} setTextInput={setTextInput}/>
                <br />
                <button className='border py-2 px-4 bg-blue-600 text-white font-semibold rounded' onClick={apiFetching}>Translate</button>
                <p className='my-4 max-w-xs'> {result}</p>
            </div>
        </div>
    </section>
  )
}

export default HomePage