import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  allLoading: false,
  currentItem: null,
  currentLoading: false,
  error: null,
}

export const servicesSlice = createSlice({
  name: 'servicesSlice',
  initialState,
  reducers: {
    getServicesRequest(state) {
      state.allLoading = true
      state.error = null
    },
    getServicesFailure(state, action) {
      state.allLoading = false
      state.error = action.payload
    },
    getServicesSuccess(state, action) {
      state.allLoading = false
      state.items = action.payload
    },

    getDetailsRequest(state, action) {
      state.currentItem = null
      state.currentLoading = true
      state.error = null
    },
    getDetailsFailure(state, action) {
      state.currentLoading = false
      state.error = action.payload
    },
    getDetailsSuccess(state, action) {
      state.currentLoading = false
      state.currentItem = action.payload
    },
  },
})

export default servicesSlice.reducer
export const {
  getServicesRequest,
  getServicesFailure,
  getServicesSuccess,
  getDetailsRequest,
  getDetailsFailure,
  getDetailsSuccess,
} = servicesSlice.actions
