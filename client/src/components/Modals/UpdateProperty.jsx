import { useState } from 'react'
import {
  useGetPropertyByIdQuery,
  useUpdatePropertyMutation,
} from '../../store/api/propertyApi'
import Alert from '../Alert'
import ModalLayout from './ModalLayout'
import { useDispatch } from 'react-redux'
import { closeUpdatePropertyModel } from '../../store/slice/appSlice'
import Loading from '../Loading'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const UpdateProperty = () => {
  const { id } = useParams()
  const { data, isFetching } = useGetPropertyByIdQuery(id)
  const dispatch = useDispatch()
  const [updateProperty, { isError, error, isSuccess, isLoading }] =
    useUpdatePropertyMutation()
  const [values, setValues] = useState({
    name: data?.property.name || '',
    description: data?.property?.description || '',
    propertyType: data?.property?.propertyType || '',
    location: data?.property?.location || '',
    price: data?.property?.price || 0,
    image: null,
  })
  const handleChange = ({ currentTarget: input }) => {
    setValues({ ...values, [input.name]: input.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('id', id)
    form.append('name', values.name)
    form.append('description', values.description)
    form.append('propertyType', values.propertyType)
    form.append('location', values.location)
    form.append('image', values.image)
    form.append('price', values.price)
    const res = await updateProperty(form)
    if (res.data) {
      dispatch(closeUpdatePropertyModel())
      toast.success('Property detail updated')
    }
  }

  const body = (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-4'>
        {isError && <Alert errorMessage={error.data.msg} />}
        <div className='flex space-x-2'>
          <label className='font-semibold'>Name:</label>
          <input
            name='name'
            className='flex-1 outline-none focus:outline-sky-500 p-1'
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className='flex space-x-2'>
          <label className='font-semibold'>Description:</label>
          <textarea
            className='h-20 w-full outline-none focus:outline-sky-500 p-1'
            name='description'
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='flex space-x-2'>
          <label className='font-semibold'>Type:</label>
          <input
            name='propertyType'
            className='flex-1 outline-none focus:outline-sky-500 p-1'
            onChange={handleChange}
            value={values.propertyType}
          />
        </div>
        <div className='flex space-x-2'>
          <label className='font-semibold'>Location:</label>
          <input
            name='location'
            className='flex-1 outline-none focus:outline-sky-500  p-1'
            onChange={handleChange}
            value={values.location}
          />
        </div>
        <div className='flex space-x-2'>
          <label className='font-semibold'>Price:</label>
          <input
            name='price'
            className='flex-1 outline-none focus:outline-sky-500  p-1'
            onChange={handleChange}
            value={values.price}
          />
        </div>

        <div className='flex-1 flex items-center space-x-2'>
          <p className='font-semibold'>Image:</p>
          <input
            type='file'
            name='image'
            onChange={(e) => setValues({ ...values, image: e.target.files[0] })}
          />
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='btn bg-sky-500 '
            disabled={isLoading}
          >
            {isLoading ? <span>Updating</span> : <span>Update Property</span>}
            {isLoading && <Loading />}
          </button>
        </div>
      </div>
    </form>
  )
  return (
    <ModalLayout
      title={'Updating property detail'}
      body={body}
      closeFunction={() => dispatch(closeUpdatePropertyModel())}
    />
  )
}

export default UpdateProperty
