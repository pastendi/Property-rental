import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showRegisterPropertyModal: false,
    showUpdatePropertyModal: false,
  },
  reducers: {
    openRegisterPropertyModel: (state, action) => {
      state.showRegisterPropertyModal = true
    },
    closeRegisterPropertyModel: (state, action) => {
      state.showRegisterPropertyModal = false
    },
    openUpdatePropertyModel: (state, action) => {
      state.showUpdatePropertyModal = true
    },
    closeUpdatePropertyModel: (state, action) => {
      state.showUpdatePropertyModal = false
    },
  },
})
export const {
  openRegisterPropertyModel,
  closeRegisterPropertyModel,
  openUpdatePropertyModel,
  closeUpdatePropertyModel,
} = appSlice.actions
export const appReducer = appSlice.reducer
export const showRegisterPropertyModal = (state) =>
  state.app.showRegisterPropertyModal
export const showUpdatePropertyModal = (state) =>
  state.app.showUpdatePropertyModal
