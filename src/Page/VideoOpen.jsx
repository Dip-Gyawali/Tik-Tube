import React from 'react'
import Demo from '../assets/icons/Demo Video.mp4'
import profile from '../assets/icons/hiten.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function VideoOpen() {
  return (
    <div className='bg-[#0f0f0f] text-white fixed top-[72px] left-0 h-[93vh] w-[80%] z-10 overflow-y-auto p-5 flex flex-col gap-3'>
      <video src={Demo} controls muted className='rounded-[20px] h-[75vh]'></video>
      <h1 className='text-bold text-[30px]'>Title of the above video is here</h1>

      {/* channel subscribe like button section */}
      <div className='flex items-center justify-between'>

        {/* channel section */}
        <div className='flex items-center gap-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />
          <div>
            <h1 className='font-bold'>Hiten Gyawali</h1>
            <p className='text-[10px]'>200M Subscriber</p>
          </div>
          <button className='border-white border-2 bg-white text-black rounded-[30px] px-3 py-1 font-bold'>Subscribe</button>
        </div>

        {/* like dislike section */}
        <div className='flex gap-5'>

          {/* like dislike buttons */}
          <div className='flex gap-1 bg-[#ffffff31] p-2 rounded-[30px]'>
            <button>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>3K |</span>
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
        <h1>119K views 6 months ago</h1>
        <p>Learn how to code from this video and many more for moren details contach ....</p>
      </div>
      {/* comment section */}
      <div className='flex flex-col gap-5'>
        {/* total comments */}
        <h1>255 Comments</h1>

        {/* commentors name */}
        <div className='flex gap-2'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>
        </div>

        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>

        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>


        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>


        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>


        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>


        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>



        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>



        <div className='flex gap-2 my-3'>
          <img src={profile} alt="profile" className='h-[40px] w-[40px] rounded-[50%]' />

          {/* detailed commet section*/}
          <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <h1>Hiten Gyawali</h1>
            <p>6 months ago</p>
          </div>
          <p>Very good content brother</p>
          <div className='flex gap-2'>
            <button className='bod'>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span> 3K</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          </div>

        </div>


        
      </div>

    </div>
  )
}
