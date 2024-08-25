import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-gray-900 text-white p-2'>
            <div className='flex items-center justify-center gap-2 m-4'>
                <h1>hide</h1>
                <h1>Logo</h1>
            </div>
            <input type="text" placeholder='Search' className='rounded-3xl w-[30vw] text-white p-2 bg-gray-900 border-gray-500 border-2 placeholder:text-gray-400' />
            <div className='flex items-center justify-center gap-2 mr-4'>
                <h1>Not</h1>
                <h1>Prof</h1>
            </div>
        </div>
    )
}
