import React from 'react'
import ModalLayout from './ModalLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { closeDeletePropertyModel } from '../../store/slice/appSlice'
import { useDispatch } from 'react-redux'
import { useRemovePropertyByIdMutation } from '../../store/api/propertyApi'
import toast from 'react-hot-toast'
import Loading from '../Loading'

const DeleteProperty = () => {
  const { id } = useParams()
  const [removeProperty, { isSuccess, isLoading, isError, error }] =
    useRemovePropertyByIdMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDelete = async () => {
    const res = await removeProperty(id)
    if (res.data) {
      dispatch(closeDeletePropertyModel())
      navigate('/property')
      toast.success('Property removed')
    }
  }
  const body = (
    <div>
      <p className='text-center text-2xl font-semibold mb-6'>
        Are you sure you want to remove this property?
      </p>
      {isLoading ? (
        <div className='flex justify-center'>
          <button className='btn bg-blue-500'>
            <span>Loading </span>
            <Loading />
          </button>
        </div>
      ) : (
        <div className='flex justify-center space-x-4 '>
          <button className='btn bg-red-700' onClick={handleDelete}>
            Delete
          </button>
          <button
            className='btn bg-sky-700'
            onClick={() => dispatch(closeDeletePropertyModel())}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
  return (
    <ModalLayout
      title={'Removing property'}
      body={body}
      closeFunction={() => dispatch(closeDeletePropertyModel())}
    />
  )
}

export default DeleteProperty
