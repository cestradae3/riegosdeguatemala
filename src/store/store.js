
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { paramsSlice } from './dashboard/dashboardSlice'
import { uiSlice } from './ui'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    params: paramsSlice.reducer,
  },
})