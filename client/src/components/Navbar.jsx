import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../store/slice/authSlice'

const Navbar = () => {
  const user = useSelector(selectCurrentUser)
  const username = user?.name.split(' ')[0]
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
        <div>
          <div className='text-black flex flex-col'>
            <span className='text-sm'>Welcome</span>
            <span className='font-semibold capitalize '>{username}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
