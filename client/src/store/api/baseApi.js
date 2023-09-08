import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout, setCredentials } from '../slice/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  // credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token')
    const refreshResult = await baseQuery(
      '/api/auth/refresh',
      api,
      extraOptions
    )
    console.log(refreshResult)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      // store new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }))
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}
export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
})
