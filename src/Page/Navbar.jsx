import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../assets/icons/profilePic.jpg';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { apiContext } from '../context/context';

export default function Navbar() {
    const [searchRes, setSearchRes] = useState("");
    const { setSearchData } = useContext(apiContext);
    const navigate = useNavigate();

    const handleSearch = () => {
        setSearchData(searchRes);
        navigate('/search');
    };

    return (
        <>
            <div className='flex items-center justify-between bg-[#0f0f0f] text-white p-1 fixed top-0 z-10 w-full'>
                <Link to="/">
                    <div className='flex items-center gap-2 m-2 md:m-4'>
                        <FontAwesomeIcon icon={faYoutube} size="2x" color="red" />
                        <p className='text-lg md:text-2xl'>TikTube</p>
                    </div>
                </Link>
                <div className='flex items-center gap-1 border-gray-500 border-2 rounded-full overflow-hidden w-4/5 sm:w-2/3 md:w-[40vw] lg:w-[30vw]'>
                    <input
                        type="text"
                        placeholder='Search'
                        value={searchRes}
                        className='border-none bg-transparent outline-none w-full px-3 py-2'
                        onChange={(e) => setSearchRes(e.target.value)}
                    />
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass} 
                        className='bg-[#ffffff14] p-4 cursor-pointer' 
                        onClick={handleSearch} 
                    />
                </div>
                <div className='hidden md:flex items-center gap-4 mr-4'>
                    <FontAwesomeIcon icon={faBell} className='text-lg md:text-xl' />
                    <img src={ProfilePic} alt="Profile pic" className='rounded-full h-8 w-8 md:h-10 md:w-10' />
                </div>
            </div>
            <Outlet/>
        </>
    );
}
