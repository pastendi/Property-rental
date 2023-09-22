import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import {
  showDeletePropertyModal,
  showRegisterPropertyModal,
  showUpdatePropertyModal,
} from '../store/slice/appSlice'
import AddProperty from '../components/Modals/AddProperty'
import { useSelector } from 'react-redux'
import UpdateProperty from '../components/Modals/UpdateProperty'
import DeleteProperty from '../components/Modals/DeleteProperty'

const Layout = () => {
  const propertyRegistrationModal = useSelector(showRegisterPropertyModal)
  const propertyUpdateModal = useSelector(showUpdatePropertyModal)
  const propertyRemoveModal = useSelector(showDeletePropertyModal)
  return (
    <>
      <div className='w-full h-full flex'>
        <div className='fixed top-0 w-full h-14'>
          <Navbar />
        </div>
        <div className='w-72 z-20'>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <div className='min-h-screen bg-whiteBg p-4 pt-20 '>
            <Outlet />
          </div>
        </div>
      </div>
      {propertyRegistrationModal && <AddProperty />}
      {propertyUpdateModal && <UpdateProperty />}
      {propertyRemoveModal && <DeleteProperty />}
    </>
  )
}

export default Layout
