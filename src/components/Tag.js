import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag , setTag] = useState('car');

  const {gif, loading, fetchData} = useGif(tag);
 
  return (
    <div className='w-1/2  bg-blue-400 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>Random {tag} GIF</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width="400" />)
        }

        <input
          className='w-10/12 text-lg py-2 rounded-lg  text-center'
          onChange={(event) => setTag(event.target.value)}
          value={tag}
        />

        <button onClick={() => fetchData(tag)}
        className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mt-[10px] mb-[20px]'>
          Generate
        </button>
    </div>
  )
}

export default Tag