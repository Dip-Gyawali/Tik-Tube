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
    const {categoryID} = useParams();

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
        getSearchData();
    }, [searchData]);

    useEffect(() => {
        const uniqueChannelIDs = [...new Set(search.map(item => item.snippet.channelId))];
        uniqueChannelIDs.forEach(channelID => getChannelData(channelID));
    }, [search]);

    return (
        <div>
            <Sidebar />
            <div className='bg-[#0f0f0f] text-white fixed right-0 top-[72px] z-10 overflow-y-auto h-[93vh] w-[90%] flex flex-col gap-7 p-10'>
                {search.map((ele, index) => {
                    const channel = channelData[ele.snippet.channelId];
                    return (
                        <Link to={`/video/${ele.snippet.categoryId}/${ele.id.videoId}`} key={index}>
                        <div className='flex gap-5 ml-40'>
                            <img src={ele.snippet.thumbnails.medium.url} alt="thumbnail" className='h-[300px] w-[500px] rounded-2xl' />
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h1 className='font-bold text-xl'>{ele.snippet.title}</h1>
                                    <p className='text-sm'>
                                        {channel ? valueConvertor(channel.statistics.viewCount) : 'Loading views'} views &bull;    {ele.snippet.publishedAt ? moment(ele.snippet.publishedAt).fromNow(): 'Loading date'}
                                    </p>
                                </div>
                                <div className='flex gap-3'>
                                    <img
                                        src={channel?.snippet?.thumbnails?.default?.url || hiten}
                                        alt="profile"
                                        className='h-[25px] w-[25px] rounded-[50%]'
                                    />
                                    <h2>{ele.snippet.channelTitle}</h2>
                                </div>
                                <p className='text-sm'>{ele.snippet.description}</p>
                            </div>
                        </div>
                        </Link>
                    );
                })}
            </div>
            <Recommendation categoryID={categoryID}/>
        </div>
    );
}
