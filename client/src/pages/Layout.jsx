import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { showRegisterPropertyModal } from '../store/slice/appSlice'
import AddProperty from '../components/Modals/AddProperty'
import { useSelector } from 'react-redux'

const Layout = () => {
  const propertyModal = useSelector(showRegisterPropertyModal)
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
          <div className='min-h-screen bg-whiteBg p-4 pt-16 '>
            <Outlet />
          </div>
        </div>
      </div>
      {propertyModal && <AddProperty />}
    </>
  )
}

export default Layout
