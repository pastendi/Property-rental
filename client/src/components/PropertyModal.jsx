import { IoLocationSharp } from 'react-icons/io5'
const PropertyModal = ({ photo, name, location, price }) => {
  return (
    <div className='w-full'>
      <div className='w-full aspect-video bg-slate-400 rounded-xl overflow-hidden'>
        <img src={photo} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='w-full flex justify-between mt-2'>
        <div>
          <p className='text-lg font-semibold'>{name}</p>
          <p className='flex items-center space-x-1'>
            <span>
              <IoLocationSharp size={14} />
            </span>
            <span className='text-light'>{location}</span>
          </p>
        </div>
        <div>
          <p className='rounded px-2 py-1 bg-blue-200 text-blue-700'>{`$${price}`}</p>
        </div>
      </div>
    </div>
  )
}

export default PropertyModal
