import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showRegisterPropertyModal: false,
    showUpdatePropertyModal: false,
    showDeletePropertyModal: false,
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
    openDeletePropertyModel: (state, action) => {
      state.showDeletePropertyModal = true
    },
    closeDeletePropertyModel: (state, action) => {
      state.showDeletePropertyModal = false
    },
  },
})
export const {
  openRegisterPropertyModel,
  closeRegisterPropertyModel,
  openUpdatePropertyModel,
  closeUpdatePropertyModel,
  openDeletePropertyModel,
  closeDeletePropertyModel,
} = appSlice.actions
export const appReducer = appSlice.reducer
export const showRegisterPropertyModal = (state) =>
  state.app.showRegisterPropertyModal
export const showUpdatePropertyModal = (state) =>
  state.app.showUpdatePropertyModal
export const showDeletePropertyModal = (state) =>
  state.app.showDeletePropertyModal
