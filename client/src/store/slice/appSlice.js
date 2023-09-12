import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showRegisterPropertyModal: false,
  },
  reducers: {
    openRegisterPropertyModel: (state, action) => {
      state.showRegisterPropertyModal = true
    },
    closeRegisterPropertyModel: (state, action) => {
      state.showRegisterPropertyModal = false
    },
  },
})
export const { openRegisterPropertyModel, closeRegisterPropertyModel } =
  appSlice.actions
export const appReducer = appSlice.reducer
export const showRegisterPropertyModal = (state) =>
  state.app.showRegisterPropertyModal
