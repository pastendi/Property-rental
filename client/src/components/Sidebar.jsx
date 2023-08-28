import React from 'react'
import { GiReactor } from 'react-icons/gi'
import { navLinks } from '../constants'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className=' fixed top-0 left-0 w-72 h-full p-4'>
      <section>
        <div className='flex gap-2 items-center'>
          <div className='text-primary'>
            <GiReactor size={44} />
          </div>
          <p className='text-3xl font-bold'>Yariga</p>
        </div>
      </section>
      <menu className='mt-6 p-2 flex flex-col space-y-2'>
        {navLinks.map((link, index) => {
          const { path, text } = link
          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white nav-link' : 'nav-link'
              }
            >
              <link.icon />
              <p>{text}</p>
            </NavLink>
          )
        })}
      </menu>
    </div>
  )
}

export default Sidebar
