"use client"

import React from 'react'
import { useState } from 'react'

const Page = () => {
    const [formValues, setFormValues] = useState({})
    const [updatedUrl, setUpdatedUrl] = useState([])

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name] : e.target.value});
    }

    // console.log(formValues)

    const handleUpdateUrl = () => {
        setUpdatedUrl([...updatedUrl, formValues]);
        console.log(updatedUrl)
    }

  return (
    <div>
        <div className="hero flex justify-center items-center mt-10">
            <div className="container w-[40vw] bg-[#C6D870] rounded-2xl">
                <h2 className='font-bold text-[22px] p-3'>Generate Your Short URLs</h2>
                <div className="form-inputs flex flex-col justify-center items-center gap-y-2 mt-2 p-3">
                    <input type="text" name='fullurl' value={formValues.fullurl ? formValues.fullurl : ''} onChange={handleChange} className='bg-[#E1E9C9] w-[100%] p-2.5 rounded-2xl outline-[#556B2F] active:outline-2'/>
                    <input type="text" name='shorturl' value={formValues.shorturl ? formValues.shorturl : ''} onChange={handleChange} className='bg-[#E1E9C9] w-[100%] p-2.5 rounded-2xl outline-[#556B2F] active:outline-2'/>
                    <button onClick={handleUpdateUrl} className='bg-[#556B2F] font-bold w-[100%] rounded-2xl p-2 text-white hover:bg-[#8FA31E] cursor-pointer'>Generate</button>
                </div>

                <div className="shorten-urls-container p-4 flex flex-col gap-y-3">
                    {updatedUrl.map((value) => {
                        return (
                            <>
                                <a href={`http://localhost:3000/${value.shorturl}`} target='_blank' className='font-semibold text-[20px]'>{`http://localhost:3000/${value.shorturl}`}</a>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page
