import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full pl-72 h-full bg-white'>
      <div className='w-full h-full px-4 flex flex-row justify-between items-center'>
        <div>
          <input
            type='text'
            placeholder='search'
            className='w-64 bg-gray-100 px-3 py-1 rounded-md'
          />
        </div>
        <div>
          <p className='text-black'>User</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
