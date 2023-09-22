import React from 'react'
import { GiReactor } from 'react-icons/gi'
import { navLinks } from '../constants'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { useLogoutMutation } from '../store/api/authApi'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice'
const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [severLogout, { isFetching, isSuccess }] = useLogoutMutation()
  const handleLogout = () => {
    try {
      severLogout().then(() => {
        dispatch(logout())
        navigate('/login')
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='fixed top-0 left-0 w-72 h-full p-4 '>
      <div className='w-full h-full relative'>
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
        <div className='absolute bottom-4 right-4'>
          <button
            className='btn text-black flex justify-center items-center space-x-1 hover:bg-gray-200'
            onClick={handleLogout}
          >
            <span>
              <BiLogOut size={24} />
            </span>
            <span>logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
