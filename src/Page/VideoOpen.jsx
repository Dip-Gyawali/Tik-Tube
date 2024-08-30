import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { apiContext } from '../context/context';
import moment from 'moment';

export default function VideoOpen({ videoID }) {

  const [videoData, setVideoData] = useState(null);
  const { valueConvertor } = useContext(apiContext);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  let apiKey = import.meta.env.VITE_API_KEY;
  let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${apiKey}`;

  //this function calls api to get video data
  async function getVideoData() {
    try {
      let res = await fetch(apiURL);
      if (!res.ok) {
        console.log("error");
      }
      //  console.log(res);
      let data = await res.json();
      setVideoData(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  }

  //channel informations
  async function getChannelData(channelID) {
    let channelURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelID}&key=${apiKey}`;
    try {
      let res = await fetch(channelURL);
      if (!res.ok) {
        console.log("Error fetching channel data");
        return;
      }
      let data = await res.json();
      setChannelData(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  }

  //comment data
  async function getCommentData(videoID){
    //comment data
    let commentUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=${apiKey}`;
    try {
      let response = await fetch(commentUrl);
      if(!response.ok){
        console.log("error");
      }
      let data = await response.json();
      setCommentData(data.items);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVideoData();
  }, [])

  useEffect(() => {
    if (videoData && videoData.snippet.channelId) {
      getChannelData(videoData.snippet.channelId);
      getCommentData(videoID); 
    }
  }, [videoData]);

  return (
    <div className='bg-[#0f0f0f] text-white fixed top-[72px] left-0 h-[93vh] w-[80%] z-10 overflow-y-auto p-5 flex flex-col gap-3'>
      <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className="h-[400px] w-full"></iframe>

      <h1 className='text-bold text-[30px]'>{videoData ? videoData.snippet.title : "The title of the video"}</h1>

      {/* channel subscribe like button section */}
      <div className='flex items-center justify-between'>

        {/* channel section */}
        <div className='flex items-center gap-3'>
          <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />
          <div>
            <h1 className='font-bold'>{videoData ? videoData.snippet.channelTitle : "Hiten"}</h1>
            <p className='text-[10px]'>{valueConvertor(channelData ? channelData.statistics.subscriberCount : "0")} Subscriber</p>
          </div>
          <button className='border-white border-2 bg-white text-black rounded-[30px] px-3 py-1 font-bold'>Subscribe</button>
        </div>

        {/* like dislike section */}
        <div className='flex gap-5'>

          {/* like dislike buttons */}
          <div className='flex gap-3 bg-[#ffffff31] p-2 rounded-[30px]'>
            <button className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>{valueConvertor(videoData ? videoData.statistics.likeCount : "0")} |</span>
            </button>
            <button className="flex items-center focus:outline-none">
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>

          {/* share button */}
          <button className=' bg-[#ffffff31] p-2 rounded-[30px] flex gap-2 items-center'>
            <FontAwesomeIcon icon={faShareSquare} />
            <span>Share</span>
          </button>

          {/* Download Button */}
          <button className=' bg-[#ffffff31] p-2 rounded-[30px] flex gap-2 items-center'>
            <FontAwesomeIcon icon={faDownload} />
            <span>Download</span>
          </button>

        </div>
      </div>

      {/* Description section */}
      <div className=' bg-[#ffffff31] rounded-[20px] p-3'>
        <h1>{valueConvertor(videoData ? videoData.statistics.viewCount : "0")} views {moment(videoData ? videoData.snippet.publishedAt : "0").fromNow()}</h1>
        <p>{videoData ? videoData.snippet.description.slice(0, 300) + "....." : "Video description"}</p>
      </div>
      {/* comment section */}
      <div className='flex flex-col gap-5'>
        {/* total comments */}
        <h1 className='font-bold text-xl'>{videoData ? videoData.statistics.commentCount : "0"} Comments</h1>

        {/* commentors name */}
        {commentData.map((ele, index) => (
            <div className='flex gap-2' key={index}>
             <img src={ele.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

              <div className='flex flex-col gap-2'>
                <div className='flex gap-2'>
                  <h1>{ele.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                  <p>{moment(ele.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
                </div>
                <p>{ele.snippet.topLevelComment.snippet.textOriginal}</p>
                <div className='flex gap-2'>
                  <button className='bod'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span> {valueConvertor(ele.snippet.topLevelComment.snippet.likeCount)}</span>
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
