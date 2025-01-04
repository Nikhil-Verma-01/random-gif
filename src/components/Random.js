import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const{gif, loading, fetchData} = useGif();

  
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIF</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width="400" />)
        }

        <button onClick={() => fetchData()}
        className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mt-[20px] mb-[20px]'>
          Generate
        </button>

    </div>
  )
}

export default Random