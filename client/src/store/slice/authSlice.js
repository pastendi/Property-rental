import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated:
      JSON.parse(localStorage.getItem('isAuthenticated')) || false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.token = accessToken
      localStorage.setItem('isAuthenticated', true)
    },
    logout: (state, action) => {
      state.user = null
      state.token = null
      localStorage.setItem('isAuthenticated', false)
    },
  },
})
export const { setCredentials, logout } = authSlice.actions
export const authReducer = authSlice.reducer
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const isAuthenticated = (state) => state.auth.isAuthenticated
