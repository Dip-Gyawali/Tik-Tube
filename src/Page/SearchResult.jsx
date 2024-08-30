import React from 'react'
import Sidebar from './Sidebar'

export default function SearchResult() {
  return (
    <div>
      <Sidebar/>
      <div className='bg-[#0f0f0f] text-white fixed right-0 top-[72px] z-10 overflow-y-auto h-[93vh] w-[90%] grid grid-cols-5 p-8 gap-5'>
         <h1>Hello</h1>
      </div>
    </div>
  )
}
