import React from 'react'
import VideoOpen from './VideoOpen'
import Recommendation from './Recommendation'
import { useParams } from 'react-router-dom'

export default function Video() {
    const {videoID,categoryID}= useParams();
  return (
    <div>
       <VideoOpen videoID={videoID}/>
       <Recommendation categoryID={categoryID}/>
    </div>
  )
}
