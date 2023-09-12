import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { authReducer } from './slice/authSlice'
import { appReducer } from './slice/appSlice'
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
