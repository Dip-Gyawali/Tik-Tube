import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../assets/icons/profilePic.jpg'
import { Link, Outlet } from 'react-router-dom';
import { apiContext } from '../context/context';

export default function Navbar() {
    const [searchRes, setSearchRes]= useState("");
     
    const {setSearchData} = useContext(apiContext);
    return (
        <>
        <div className='flex items-center justify-between bg-[#0f0f0f] text-white p-1 fixed top-0 z-10 w-[100vw]'>
            {/* youtube logos and side bar display button */}
            <Link to="/">
            <div className='flex items-center justify-center gap-2 m-4'>
                <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
                <p className='text-[20px]'>YouTube</p>
            </div>
            </Link>
            {/* search bar */}
            <div className='flex items-center justify-center gap-1 border-gray-500 border-2 rounded-[30px] overflow-hidden'>
                <input type="text" placeholder='Search' value={searchRes} 
                className='border-none bg-transparent outline-none w-[20vw] px-3 py-2' 
                onChange={(e)=>setSearchRes(e.target.value)}/>

                <Link to='/search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-[#ffffff14] p-4' onClick={()=> setSearchData(searchRes)} />
                </Link>
            </div>
            {/* Profile logo and notification */}
            <div className='flex items-center justify-center gap-4 mr-4'>
                <FontAwesomeIcon icon={faBell} className='text-[25px]'/>
                <img src={ProfilePic} alt="Profile pic" className='rounded-[50%] h-[30px] w-[30px]'/>
            </div>
        </div>
            <Outlet/>
        </>
    )
}
