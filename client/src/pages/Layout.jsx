import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className='w-full h-full flex'>
        <div className='fixed top-0 w-full h-12'>
          <Navbar />
        </div>
        <div className='w-72 z-20'>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <div className='min-h-screen bg-whiteBg p-4 pt-14 '>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
