import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isAuthenticated, selectCurrentToken } from '../store/slice/authSlice'
import useRefreshToken from '../hooks/useRefreshToken'
import { Navigate, Outlet } from 'react-router-dom'

const PersistLogin = () => {
  const [loading, setLoading] = useState(true)
  const token = useSelector(selectCurrentToken)
  const isLoggedIn = useSelector(isAuthenticated)
  const refresh = useRefreshToken()
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    isLoggedIn ? verifyRefreshToken() : setLoading(false)
  }, [])
  return <>{loading ? null : !token ? <Navigate to='/login' /> : <Outlet />}</>
}

export default PersistLogin
