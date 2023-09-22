import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import {
  showRegisterPropertyModal,
  showUpdatePropertyModal,
} from '../store/slice/appSlice'
import AddProperty from '../components/Modals/AddProperty'
import { useSelector } from 'react-redux'
import UpdateProperty from '../components/Modals/UpdateProperty'

const Layout = () => {
  const propertyRegistrationModal = useSelector(showRegisterPropertyModal)
  const propertyUpdateModel = useSelector(showUpdatePropertyModal)
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
      {propertyUpdateModel && <UpdateProperty />}
    </>
  )
}

export default Layout
