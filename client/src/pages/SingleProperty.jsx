import { useParams, useNavigate } from 'react-router-dom'
import { useGetPropertyByIdQuery } from '../store/api/propertyApi'
import Loading from '../components/Loading'
import { IoArrowBack } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { openUpdatePropertyModel } from '../store/slice/appSlice'

const SingleProperty = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isFetching } = useGetPropertyByIdQuery(id)
  if (isFetching) return <Loading />
  const { name, description, propertyType, price, photo, location } =
    data.property
  return (
    <>
      <button
        className=' text-primary text-2xl  hover:bg-white rounded-lg flex items-center px-2 py-1 space-x-1 '
        onClick={() => navigate('/property')}
      >
        <IoArrowBack />
        <span>Back</span>
      </button>
      <h1 className='text-3xl font-semibold capitalize mb-6'>{name}</h1>
      <div className='flex space-x-6'>
        <div className='flex-1 h-full items-center justify-center '>
          <div className='w-full rounded-xl aspect-video overflow-hidden mx-auto '>
            <img src={photo} alt={name} />
          </div>
          <h1 className='font-semibold mt-6 text-2xl '>Description</h1>
          <p>{description}</p>
        </div>
        <div className='flex-1 text-xl'>
          <p>
            <span className='capitalize font-semibold pr-2'>Price:</span>
            {`$${price}`}
          </p>
          <p>
            <span className='capitalize font-semibold pr-2'>
              Property Type:
            </span>
            {`${propertyType}`}
          </p>
          <p>
            <span className='capitalize font-semibold pr-2'>Location:</span>
            {`${location}`}
          </p>
          <div className='mt-10 flex space-x-4'>
            <button
              className='btn bg-sky-600 hover:bg-sky-500'
              onClick={() => dispatch(openUpdatePropertyModel())}
            >
              Update
            </button>
            <button className='btn bg-red-600 hover:bg-red-500'>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProperty
