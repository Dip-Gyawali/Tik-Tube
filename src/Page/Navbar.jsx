import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../assets/icons/profilePic.jpg'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-gray-900 text-white p-1'>
            {/* youtube logos and side bar display button */}
            <div className='flex items-center justify-center gap-2 m-4'>
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
                <p className='text-[20px]'>YouTube</p>
            </div>
            {/* search bar */}
            <div className='flex items-center justify-center gap-1 border-gray-500 border-2 rounded-[30px] px-3 py-2'>
                <input type="text" placeholder='Search' className='border-none bg-transparent outline-none w-[20vw]' />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            {/* Profile logo and notification */}
            <div className='flex items-center justify-center gap-4 mr-4'>
                <FontAwesomeIcon icon={faBell} className='text-[25px]'/>
                <img src={ProfilePic} alt="Profile pic" className='rounded-[50%] h-[30px] w-[30px]'/>
            </div>
        </div>
    )
}
