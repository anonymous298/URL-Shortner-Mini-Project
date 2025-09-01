

import React from 'react'
// import clientPromise from '@/lib/connectDB';
// import { Router } from 'next/router';
// import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
import { fetchCurrentData } from '@/actions/serverActions';
import Redirect from '@/components/Redirect';

const page = async ({params}) => {
    const {shorturl} = await params
    // const params = useParams();
    // const router = useRouter();

    const fetchdata = async () => {

        const currentData = await fetchCurrentData(shorturl)
    
        // console.log(currentData)
        return currentData
    }

    const currentData = await fetchdata()
    
    // router.push(currentData.fullurl);

  return (
    <div>
        <h2>Redirecting to URL...</h2>
      <Redirect fullurl={currentData.fullurl} />
    </div>
  )
}

export default page
