import React, { useContext, useState } from 'react'
import thumbnail from '../assets/icons/thumbnail.jpeg';
import { apiContext } from '../context/context';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Recommendation({categoryID}) {
    const [data,setData]= useState([]);
    const {valueConvertor} = useContext(apiContext);

    let apiKey = import.meta.env.VITE_API_KEY;
  let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryID}&key=${apiKey}`;

  async function getData() {
    try {

      let res = await fetch(apiURL);
      if (!res.ok) {
        console.log(error);
      }
      // console.log(res);
      let data = await res.json();
      // console.log(data);
      setData(data.items);

    } catch (error) {
      console.log(error);
    }

  }

  useState(()=>{
    getData();
  },[])

  return (
    <div className='bg-[#0f0f0f] text-white fixed top-[72px] right-0 h-[93vh] w-[20%] z-10 overflow-y-auto flex flex-col gap-5 p-5'>
       {/* recommended videos list */}
       {data.map((ele,index)=>(
        <Link key={index} to={`/video/${ele.snippet.categoryId}/${ele.id}`}>
       <div className='flex gap-3' >
          <img src={ele.snippet.thumbnails.medium.url} alt="" className='h-24 w-32 rounded-[20px]'/>
          <div className='flex flex-col gap-2'>
             <h1 className='font-bold'>{ele.snippet.title.slice(0,30) + "..."}</h1>
             <h3 className='text-sm'>{ele.snippet.channelTitle}</h3>
             <p className='text-sm'>{valueConvertor(ele.statistics.viewCount)} views &bull; {moment(ele.snippet.publishedAt).fromNow()}</p>
          </div>
       </div>
        </Link>
       ))}

    </div>
  )
}
