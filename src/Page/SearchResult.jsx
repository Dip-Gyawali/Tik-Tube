import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import hiten from '../assets/icons/hiten.jpg';
import { apiContext } from '../context/context';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import Recommendation from './Recommendation';

export default function SearchResult() {
    const { searchData, valueConvertor } = useContext(apiContext);
    const [search, setSearch] = useState([]);
    const [channelData, setChannelData] = useState({});
    const { categoryID } = useParams();

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchData}&type=video&maxResults=50&key=${apiKey}`;

    async function getSearchData() {
        try {
            let res = await fetch(apiURL);
            if (!res.ok) {
                console.log("Error fetching search data");
                return;
            }
            let data = await res.json();
            setSearch(data.items);
        } catch (error) {
            console.log(error);
        }
    }

    async function getChannelData(channelID) {
        let channelURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelID}&key=${apiKey}`;
        try {
            let res = await fetch(channelURL);
            if (!res.ok) {
                console.log("Error fetching channel data");
                return;
            }
            let data = await res.json();
            setChannelData(prevData => ({
                ...prevData,
                [channelID]: data.items[0]
            }));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (searchData) {
            getSearchData();
        }
    }, [searchData]);

    useEffect(() => {
        const uniqueChannelIDs = [...new Set(search.map(item => item.snippet.channelId))];
        uniqueChannelIDs.forEach(channelID => getChannelData(channelID));
    }, [search]);

    const formatDuration = (isoDuration) => {
        const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = match[1] ? match[1].replace('H', '') : '0';
        const minutes = match[2] ? match[2].replace('M', '') : '0';
        const seconds = match[3] ? match[3].replace('S', '') : '0';
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className='bg-[#0f0f0f] text-white fixed right-0 top-[72px] z-10 overflow-y-auto h-[93vh] w-full md:w-[80%] lg:w-[90%] p-4 md:p-6 lg:p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {search.map((ele, index) => {
                        const channel = channelData[ele.snippet.channelId];
                        const resolvedCategoryID = ele.snippet.categoryId || "20";
                        return (
                            <Link to={`/video/${resolvedCategoryID}/${ele.id.videoId}`} key={index}>
                                <div className='flex flex-col gap-3'>
                                    <div className='relative'>
                                        <img src={ele.snippet.thumbnails.medium.url} alt="thumbnail" className='w-full h-[200px] object-cover rounded-lg' />
                                        <div className='absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded'>
                                            {formatDuration(ele.contentDetails?.duration || "PT0H0M0S")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1 className='font-bold text-lg'>{ele.snippet.title}</h1>
                                        <p className='text-sm'>
                                            {channel ? valueConvertor(channel.statistics.viewCount) : 'Loading views'} views &bull; {ele.snippet.publishedAt ? moment(ele.snippet.publishedAt).fromNow() : 'Loading date'}
                                        </p>
                                        <div className='flex items-center gap-2 mt-2'>
                                            <img
                                                src={channel?.snippet?.thumbnails?.default?.url || hiten}
                                                alt="profile"
                                                className='h-[30px] w-[30px] rounded-full'
                                            />
                                            <h2 className='text-sm'>{ele.snippet.channelTitle}</h2>
                                        </div>
                                        <p className='text-sm mt-2'>{ele.snippet.description}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
