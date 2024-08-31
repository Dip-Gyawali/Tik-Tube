import React, { useContext, useEffect, useState } from 'react';
import { apiContext } from '../context/context';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Recommendation({ categoryID }) {
    const [data, setData] = useState([]);
    const { valueConvertor } = useContext(apiContext);

    let apiKey = import.meta.env.VITE_API_KEY;
    let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryID}&key=${apiKey}`;

    async function getData() {
        try {
            let res = await fetch(apiURL);
            if (!res.ok) {
                console.log("Error fetching recommendation data");
                return;
            }
            let data = await res.json();
            setData(data.items);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (categoryID) {
            getData();
        }
    }, [categoryID]);

    const formatDuration = (isoDuration) => {
        const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = match[1] ? match[1].replace('H', '') : '0';
        const minutes = match[2] ? match[2].replace('M', '') : '0';
        const seconds = match[3] ? match[3].replace('S', '') : '0';
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    };

    return (
        <div className='bg-[#0f0f0f] text-white fixed top-[72px] right-0 h-[93vh] w-[20%] z-10 overflow-y-auto  hidden sm:hidden md:hidden lg:flex flex-col xl:flex flex-col gap-5 p-5'>
            {/* Recommended videos list */}
            {data.map((ele, index) => (
                <Link key={index} to={`/video/${ele.snippet.categoryId}/${ele.id}`}>
                    <div className='flex gap-3'>
                        <div className='relative'>
                            <img src={ele.snippet.thumbnails.medium.url} alt="thumbnail" className='h-24 w-32 rounded-[20px]' />
                            <div className='absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
                                {formatDuration(ele.contentDetails.duration)}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-bold'>{ele.snippet.title.slice(0, 30) + "..."}</h1>
                            <h3 className='text-sm'>{ele.snippet.channelTitle}</h3>
                            <p className='text-sm'>{valueConvertor(ele.statistics.viewCount)} views &bull; {moment(ele.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
