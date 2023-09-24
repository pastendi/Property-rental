import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../store/api/authApi'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthenticated, setCredentials } from '../store/slice/authSlice'
import Alert from '../components/Alert'
import toast from 'react-hot-toast'

const Login = () => {
  const isLoggedIn = useSelector(isAuthenticated)
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [login, { isError, error }] = useLoginMutation()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleLogin = async () => {
    const { user, accessToken } = await login(values).unwrap()
    if (accessToken) {
      dispatch(setCredentials({ user, accessToken }))
      navigate('/')
      toast.success('Login successful')
    }
  }
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [])
  return (
    <main className='w-screen h-screen relative'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='bg-gray-400 w-[600px] h-auto rounded-xl shadow-md p-6'>
          <h1 className='text-3xl text-center font-bold underline-offset-2 underline mb-8'>
            Login Form
          </h1>
          {isError && <Alert errorMessage={error.data.msg} />}
          <div className='mt-2 space-y-4 text-center'>
            <input
              type='text'
              placeholder='E-mail'
              name='email'
              value={values.email}
              onChange={handleChange}
              className='w-full rounded outline-none px-2 py-1 text-lg'
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
              className='w-full rounded outline-none px-2 py-1 text-lg'
            />
            <div className='flex justify-center'>
              <button
                className='btn bg-emerald-500'
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </div>
            <p>
              New here?{' '}
              <span
                className='text-blue-600 underline underline-offset-2 cursor-pointer hover:text-blue-500'
                onClick={() => navigate('/register')}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
