import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../store/api/authApi'
import Alert from '../components/Alert'
import { selectCurrentUser, setCredentials } from '../store/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
  const registeredUser = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  if (registeredUser) {
    navigate('/')
  }
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    cPassword: '',
  })
  const [register, { isError, error }] = useRegisterMutation()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleRegister = async () => {
    const { user, accessToken } = await register(values).unwrap()
    dispatch(setCredentials({ user, accessToken }))
  }
  return (
    <main className='w-screen h-screen relative'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='bg-gray-400 w-[600px] h-auto rounded-xl shadow-md p-6'>
          <h1 className='text-3xl text-center font-bold underline-offset-2 underline mb-8'>
            Register Form
          </h1>
          {isError && <Alert errorMessage={error.data.msg} />}
          <div className='mt-2 space-y-4 text-center'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={values.name}
              onChange={handleChange}
              className='w-full rounded outline-none px-2 py-1  text-lg'
            />
            <input
              type='text'
              placeholder='E-mail'
              name='email'
              value={values.email}
              onChange={handleChange}
              className='w-full rounded outline-none px-2 py-1  text-lg'
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
              className='w-full rounded outline-none px-2 py-1  text-lg'
            />
            <input
              type='password'
              placeholder='Confirm Password'
              name='cPassword'
              value={values.cPassword}
              onChange={handleChange}
              className='w-full rounded outline-none px-2 py-1 text-lg'
            />
            <button className='btn bg-sky-600' onClick={() => handleRegister()}>
              Register
            </button>
            <p>
              I Already have account{' '}
              <span
                className='text-emerald-600 underline underline-offset-2 cursor-pointer hover:text-emerald-500'
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register
