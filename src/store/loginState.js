import { createSlice } from '@reduxjs/toolkit'

const initialState = { isLoggedIn: false }

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
})

const loginReducer = loginSlice.reducer

export const loginActions = loginSlice.actions
export default loginReducer