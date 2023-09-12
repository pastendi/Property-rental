import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openRegisterPropertyModel } from '../store/slice/appSlice'
const Property = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <header className='flex justify-between'>
        <div>Property</div>
        <button
          className='btn bg-blue-600 flex items-center space-x-2'
          onClick={() => dispatch(openRegisterPropertyModel())}
        >
          <span>
            <AiOutlinePlus />
          </span>
          <span>Add property</span>
        </button>
      </header>
    </div>
  )
}

export default Property
