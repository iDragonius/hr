import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: '',
        token: '',
        email: '',
    },
    reducers: {
        setUserData: (state, action) => {
            state.name = action.payload.name
            state.token = action.payload.token
            state.email = action.payload.email
        },
        deleteUserData: (state) => {
            state.name = ''
            state.token = ''
            state.email = ''
        },
    },
})

export default authSlice.reducer

export const { setUserData, deleteUserData } = authSlice.actions

export const userData = (state) => {
    return {
        name: state.auth.name,
        email: state.auth.email,
        token: state.auth.token,
    }
}
