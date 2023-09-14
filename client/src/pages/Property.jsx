import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openRegisterPropertyModel } from '../store/slice/appSlice'
import { useGetPropertyQuery } from '../store/api/propertyApi'
import PropertyModal from '../components/PropertyModal'
const Property = () => {
  const dispatch = useDispatch()
  const { data, isError, isFetching, error } = useGetPropertyQuery()
  if (isError) return <h1>{error.data.msg}</h1>
  let content
  if (!isFetching && data.properties.length > 0) {
    content = (
      <div className='w-full grid grid-cols-3 gap-4 mt-8'>
        {data.properties.map((property, index) => (
          <PropertyModal key={index} {...property} />
        ))}
      </div>
    )
  }
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
      <section>{content}</section>
    </div>
  )
}

export default Property
