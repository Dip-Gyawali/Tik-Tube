import React, { useContext, useEffect, useState } from 'react'
import thumbnail from '../assets/icons/thumbnail.jpeg'
import { Link } from 'react-router-dom'
import { apiContext } from '../context/context'
import moment from 'moment';

export default function ForYouPage() {
  const { category, valueConvertor } = useContext(apiContext);
  const [data, setData] = useState([]);

  let apiKey = import.meta.env.VITE_API_KEY;
  let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;

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

  useEffect(() => {
    getData();
  }, [category])

  return (
    <div className=' bg-[#0f0f0f] text-white fixed right-0 top-[72px] z-10 overflow-y-auto h-[93vh] w-[90%] grid grid-cols-5 p-8 g-5 '>
      {data.map((ele, index) => (
        <Link to={`video/${ele.snippet.categoryId}/${ele.id}`}>
          <div className='flex flex-col gap-2 p-5' key={index}>
            <img src={ele.snippet.thumbnails.medium.url} alt="thumbnail" className='border-none rounded-[20px]' />
            <h1 className='font-bold'>{ele.snippet.title.slice(0,50) + "..."}</h1>
            <h3>{ele.snippet.channelTitle}</h3>
            <p>{valueConvertor(ele.statistics.viewCount)} views &bull; {moment(ele.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
