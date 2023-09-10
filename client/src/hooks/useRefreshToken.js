import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setCredentials } from '../store/slice/authSlice'

const useRefreshToken = () => {
  const dispatch = useDispatch()

  const refresh = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/auth/renewToken`,
      {
        withCredentials: true,
      }
    )
    dispatch(setCredentials({ ...res.data }))
  }
  return refresh
}

export default useRefreshToken
