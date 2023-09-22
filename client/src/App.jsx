import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {
  Agent,
  Dashboard,
  Layout,
  Login,
  Property,
  Register,
  Review,
  SingleProperty,
} from './pages'
import PersistLogin from './pages/PersistLogin'
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='/property' element={<Property />} />
              <Route path='/property/:id' element={<SingleProperty />} />
              <Route path='/agent' element={<Agent />} />
              <Route path='/review' element={<Review />} />
            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
