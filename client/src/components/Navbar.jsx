import { useDispatch, useSelector } from 'react-redux'
import { logout, selectCurrentUser } from '../store/slice/authSlice'
import { IoNotificationsOutline } from 'react-icons/io5'
import { CiWallet } from 'react-icons/ci'
import { useEffect, useRef, useState } from 'react'
import { accountOptions } from '../constants'
import { IoLogOut } from 'react-icons/io5'
import { useLogoutMutation } from '../store/api/authApi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const dispatch = useDispatch()
  const [showAccount, setShowAccount] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const user = useSelector(selectCurrentUser)
  const username = user?.name.split(' ')[0]
  const dropdownRef = useRef(null)
  const toggleShowAccount = () => {
    if (showNotification) {
      setShowNotification(false)
    }
    setShowAccount((prev) => !prev)
  }
  const toggleShowNotification = () => {
    if (showAccount) {
      setShowAccount(false)
    }
    setShowNotification((prev) => !prev)
  }
  const [severLogout, result] = useLogoutMutation()
  const handleLogout = () => {
    try {
      severLogout().then(() => {
        dispatch(logout())
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAccount(false)
        setShowNotification(false)
      }
    }

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className='w-full pl-72 h-full bg-white pr-4'>
      <div className='w-full h-full px-4 flex flex-row justify-between items-center'>
        <div>
          <input
            type='text'
            placeholder='search'
            className='w-64 bg-gray-100 px-3 py-1 rounded-md outline-none'
          />
        </div>
        <div className='flex space-x-3 relative'>
          <div
            className='flex justify-center items-center text-3xl relative cursor-pointer '
            onClick={toggleShowNotification}
          >
            <IoNotificationsOutline />
            <div className='absolute top-2.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full'></div>
          </div>
          <div
            className='flex space-x-1 items-center cursor-pointer'
            onClick={toggleShowAccount}
          >
            <div className='rounded-full w-10 h-10 bg-slate-600 overflow-hidden'>
              {/* <img src='' alt='image' /> */}
            </div>
            <div className='text-black flex flex-col'>
              <span className='text-sm'>Welcome</span>
              <span className='font-semibold capitalize '>{username}</span>
            </div>
          </div>
          {/* Account dropdown */}
          {showAccount && (
            <div
              ref={dropdownRef}
              className='absolute top-14 right-0 bg-white w-44 p-4 rounded-md shadow-md space-y-1'
            >
              {accountOptions.map((option, index) => (
                <Link
                  to={option.path}
                  className='flex space-x-2 items-center hover:text-primary cursor-pointer rounded-md'
                  key={index}
                  onClick={() => setShowAccount(false)}
                >
                  <option.icon />
                  <p>{option.text}</p>
                </Link>
              ))}
              <div
                className='flex space-x-2 items-center hover:text-primary cursor-pointer rounded-md'
                onClick={handleLogout}
              >
                <IoLogOut />
                <p>Logout</p>
              </div>
              <div
                className='flex space-x-2 items-center hover:text-primary cursor-pointer rounded-md'
                onClick={() => setDarkMode((prev) => !prev)}
              >
                <div
                  className={`w-4 h-3 rounded-full  relative ${
                    darkMode ? 'bg-emerald-500' : 'bg-black'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-white absolute top-0.5  ${
                      darkMode ? 'right-0.5' : 'left-0.5'
                    }`}
                  ></div>
                </div>
                <p>Dark Mode</p>
              </div>
            </div>
          )}

          {/* Notification dropdown  */}
          {showNotification && (
            <div
              ref={dropdownRef}
              className='absolute top-14 right-0 bg-white w-80 p-4 rounded-md shadow-md'
            >
              <div className='flex space-x-2 items-center '>
                <div className='flex items-center justify-center text-3xl rounded-md p-2 text-white bg-emerald-500'>
                  <CiWallet />
                </div>
                <div>
                  <p className='font-semibold text-sm'>Payment success</p>
                  <p className='text-[0.8rem] text-gray-500'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum nulla nisi
                  </p>
                  <p>10 minutes ago</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
