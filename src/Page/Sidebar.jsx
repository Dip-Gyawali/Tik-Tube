import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faFutbolBall, faTelevision, faMicrochip, faGear, faFlag, faCircleQuestion, faMessage } from '@fortawesome/free-solid-svg-icons'
import Hiten from '../assets/icons/hiten.jpg';
import Ronaldo from '../assets/icons/urRonaldo.jpg';
import Saket from '../assets/icons/saket.jpg';
import CodingMentor from '../assets/icons/RoshanDai.jpg';
import BroCode from '../assets/icons/brocode.jpg';
import webDev from '../assets/icons/webdev.jpg';
import cocomelon from '../assets/icons/cocomelon.jpg';
import greatStack from '../assets/icons/great stack.jpg';
import { Link, Outlet } from 'react-router-dom';
import { apiContext } from '../context/context';

export default function Sidebar() {
  const {category,setCategory}= useContext(apiContext);
  const [activeCategory, setActiveCategory]= useState(0);

  const categories = [
    { id: 0, icon: faHouse, label: 'Home' },
    { id: 10, icon: faMusic, label: 'Music' },
    { id: 20, icon: faGamepad, label: 'Gaming' },
    { id: 17, icon: faFutbolBall, label: 'Sports' },
    { id: 24, icon: faTelevision, label: 'Entertainment' },
    { id: 28, icon: faMicrochip, label: 'Technology' },
];

const handleCategoryClick = (categoryId) => {
  setActiveCategory(categoryId); 
  setCategory(categoryId);        
};

  return (
    <>
      <div className='bg-[#0f0f0f] text-white fixed top-[72px] left-0 h-[93vh] w-[10%] z-10 overflow-y-auto custom-scrollbar hidden sm:hidden md:hidden lg:block xl:block'>
        <div className=' p-3 flex flex-col gap-3'>
        {categories.map((category) => (
          <Link to="/">
                <div
                    key={category.id}
                    className={`flex items-center gap-1 cursor-pointer p-2 rounded-lg ${activeCategory === category.id ? 'bg-[#ffffff31] text-white' : 'bg-transparent text-gray-400'}`}
                    onClick={() => handleCategoryClick(category.id)}
                >
                    <FontAwesomeIcon icon={category.icon} />
                    <p>{category.label}</p>
                </div>
            </Link>
            ))}
        </div>
        <hr />

        {/* channels Subscribed */}
        <div className='p-3 flex flex-col gap-3'>
          <h4 className='text-[14px]'>Subscriptions</h4>

          {/* Hiten Channel */}
          <div className='flex gap-1'>
            <img src={Hiten} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>Hiten Gyawali</p>
          </div>

          {/* Ronaldo Channel */}
          <div className='flex items-center gap-1'>
            <img src={Ronaldo} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>UR · Cristiano</p>
          </div>

          {/* Saket Channel */}
          <div className='flex items-center gap-1'>
            <img src={Saket} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>Saket Gokhale</p>
          </div>

          {/* Coding Mentro Channel */}
          <div className='flex items-center gap-1'>
            <img src={CodingMentor} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>Your Coding Me..</p>
          </div>

          {/* Bro Code Channel */}
          <div className='flex items-center gap-1'>
            <img src={BroCode} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>Bro Code</p>
          </div>

          {/* Web dev simplified Channel */}
          <div className='flex items-center gap-1'>
            <img src={webDev} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>Web Dev Simpli..</p>
          </div>

          {/* Cocomelon Channel */}
          <div className='flex items-center gap-1'>
            <img src={cocomelon} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>Cocomelon</p>
          </div>

          {/* Great Stack Channel */}
          <div className='flex items-center gap-1'>
            <img src={greatStack} alt="hiten channel" className='h-[30px] w-[30px] rounded-[50%]' />
            <p>GreatStack</p>
          </div>
        </div>
        <hr />

        {/* setting and feedback section */}
        <div className='p-3 flex flex-col gap-3'>

          {/* setting section  */}
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faGear} />
            <p>Setting</p>
          </div>

          {/* report problem section */}
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faFlag} />
            <p>Report</p>
          </div>

          {/* report problem section */}
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <p>Help</p>
          </div>

          {/* report problem section */}
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faMessage} />
            <p>Feedback</p>
          </div>

        </div>
        <hr />
        <div className='p-3 flex flex-col gap-3'>
          <p>Terms Privacy Policy & Safety Copyright © 2024 Google LLC</p>
        </div>
      </div>
    </>
  )
}
