import { createSlice } from '@reduxjs/toolkit'

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        currentUser: {},
    },
    reducers: {
        setCurrentUserData: (state, action) => {
            state.currentUser = { ...action.payload }
        },

        deleteCurrentUserData: (state) => {
            state.currentUser = {}
        },
    },
})

export default adminSlice.reducer

export const { setCurrentUserData, deleteCurrentUserData } = adminSlice.actions

export const userData = (state) => state.admin.currentUser
