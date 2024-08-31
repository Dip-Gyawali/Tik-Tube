import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiContext } from '../context/context';
import moment from 'moment';

export default function ForYouPage() {
  const { category, valueConvertor } = useContext(apiContext);
  const [data, setData] = useState([]);
  const [channelData, setChannelData] = useState({}); 

  let apiKey = import.meta.env.VITE_API_KEY;
  let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;

  console.log(apiKey);

  async function getData() {
    try {
      let res = await fetch(apiURL);
      if (!res.ok) {
        console.log("Error fetching video data");
      }
      let data = await res.json();
      console.log(data);
      setData(data.items);

      const channelIds = data.items.map((video) => video.snippet.channelId);
      getAllChannelData(channelIds);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllChannelData(channelIds) {
    try {
      const channelPromises = channelIds.map(async (channelId) => {
        if (!channelData[channelId]) {
          const channelURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${apiKey}`;
          let res = await fetch(channelURL);
          if (!res.ok) {
            console.log("Error fetching channel data");
            return null;
          }
          let data = await res.json();
          return { [channelId]: data.items[0] };
        }
        return null;
      });

      const channels = await Promise.all(channelPromises);
      const channelsData = channels.reduce((acc, channel) => {
        return { ...acc, ...channel };
      }, {});

      setChannelData((prevData) => ({ ...prevData, ...channelsData }));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [category]);

  //function to brake data into 00:00:00 format
  const formatDuration = (isoDuration) => {
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? match[1].replace('H', '') : '0';
    const minutes = match[2] ? match[2].replace('M', '') : '0';
    const seconds = match[3] ? match[3].replace('S', '') : '0';
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  };

  return (
    <div className='bg-[#0f0f0f] text-white fixed right-0 top-[72px] z-10 overflow-y-auto h-[93vh] w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8 gap-5'>
      {data.map((ele, index) => (
        <Link to={`video/${ele.snippet.categoryId}/${ele.id}`} key={index}>
          <div className='flex flex-col gap-3 p-5'>
            <div className='relative'>
              <img src={ele.snippet.thumbnails.medium.url} alt="thumbnail" className='border-none rounded-[20px]' />
              <div className='absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
                {formatDuration(ele.contentDetails.duration)}
              </div>
            </div>
            <div className='flex'>
              <img src={channelData[ele.snippet.channelId]?.snippet.thumbnails.default.url || ""} alt="profile" className='h-[35px] w-[35px] rounded-[50%]' />
              <div className='ml-2'>
                <h1 className='font-bold'>{ele.snippet.title.slice(0, 50) + "..."}</h1>
                <h3>{ele.snippet.channelTitle}</h3>
                <p>{valueConvertor(ele.statistics.viewCount)} views &bull; {moment(ele.snippet.publishedAt).fromNow()}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}