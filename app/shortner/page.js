"use client"

// import { headers } from 'next/headers'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Page = () => {
    const [formValues, setFormValues] = useState({})
    const [updatedUrl, setUpdatedUrl] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/add')
            const data = await res.json()

            if (!updatedUrl[0]) {
                setUpdatedUrl(data.data)
                console.log(updatedUrl)
            }

        }

        fetchData()
    }, [])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        // console.log(formValues)
    }

    // console.log(formValues)

    const handleUpdateUrl = () => {
        const submitData = async (data) => {
            let res = await fetch('/api/add',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                }
            )

            let a = await res.json()
            console.log(a);
        }


        setUpdatedUrl([...updatedUrl, formValues]);
        submitData(formValues)
        setFormValues({});
        // submitData()
        // console.log(updatedUrl)


    }

    const deleteFromDB = async (val) => {
        let a = await fetch(`/api/delete/`,
            {
                method: "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(val)
            }
        )

        let res = await a.json();
        console.log(res);
    }

    const deleteURL = (val, idx) => {
        setUpdatedUrl(updatedUrl.filter((_, index) => index !== idx))
        deleteFromDB(val)
    }

    return (
        <div className='w-full'>
            <div className="hero flex justify-center items-center mt-10">
                <div className="container bg-[#C6D870] rounded-2xl w-[60%] max-[500px]:w-[80%] max-[400px]:w-[95%] ">
                    <h2 className='font-bold text-[22px] p-3'>Generate Your Short URLs</h2>
                    <div className="form-inputs flex flex-col justify-center items-center gap-y-2 mt-2 p-3">
                        <input type="text" name='fullurl' value={formValues.fullurl ? formValues.fullurl : ''} onChange={handleChange} className='bg-[#E1E9C9] w-[100%] p-2.5 rounded-2xl outline-[#556B2F] active:outline-2' />
                        <input type="text" name='shorturl' value={formValues.shorturl ? formValues.shorturl : ''} onChange={handleChange} className='bg-[#E1E9C9] w-[100%] p-2.5 rounded-2xl outline-[#556B2F] active:outline-2' />
                        <button onClick={handleUpdateUrl} className='bg-[#556B2F] font-bold w-[100%] rounded-2xl p-2 text-white hover:bg-[#8FA31E] cursor-pointer'>Generate</button>
                    </div>

                    <div className="shorten-urls-container p-4 flex flex-col gap-y-3">
                        {updatedUrl.map((value, idx) => {
                            return (
                                <div key={idx} className='flex justify-between'>

                                    <a key={idx} href={`/${value.shorturl}`} target='_blank' className='font-semibold text-[20px]'>{`/${value.shorturl}`}</a>

                                    <button onClick={() => deleteURL(value, idx)} className='font-bold bg-red-600 p-2 rounded-[10px] hover:bg-red-400 cursor-pointer'>delete</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
