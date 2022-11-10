import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import adminSlice from './slices/adminSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice,
    },
    devTools: true,
})
