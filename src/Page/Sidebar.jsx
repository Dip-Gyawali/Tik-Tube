import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faFutbolBall, faTelevision, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import Hiten from '../assets/icons/hiten.jpg';
import Ronaldo from '../assets/icons/urRonaldo.jpg';
import Saket from '../assets/icons/saket.jpg';
import CodingMentor from '../assets/icons/RoshanDai.jpg';
import BroCode from '../assets/icons/brocode.jpg';
import webDev from '../assets/icons/webdev.jpg';
import cocomelon from '../assets/icons/cocomelon.jpg';
import greatStack from '../assets/icons/great stack.jpg';

export default function Sidebar() {
  return (
    <div className='w-[10%] h-full bg-gray-900 text-white'>
      {/* home button section */}
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faHouse} />
        <p>Home</p>
      </div>
      {/* music button section */}
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faMusic} />
        <p>Music</p>
      </div>
      {/* gaming button section */}
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faGamepad} />
        <p>Gaming</p>
      </div>
      {/* sports button section */}
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faFutbolBall} />
        <p>Sports</p>
      </div>
      {/* Entertainment button section */}
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faTelevision} />
        <p>Entertainment</p>
      </div>
      {/* Tech button section */}
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faMicrochip} />
        <p>Technology</p>
      </div>
      <hr />
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
    </div>
  )
}
