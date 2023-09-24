import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {
  Agent,
  Dashboard,
  Layout,
  Login,
  Profile,
  Property,
  Register,
  Review,
  Setting,
  SingleProperty,
} from './pages'
import PersistLogin from './pages/PersistLogin'
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<PersistLogin />}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='/property' element={<Property />} />
              <Route path='/property/:id' element={<SingleProperty />} />
              <Route path='/agent' element={<Agent />} />
              <Route path='/review' element={<Review />} />
              <Route path='/setting' element={<Setting />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
