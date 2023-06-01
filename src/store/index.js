import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterState"
import loginReducer from "./loginState"

const reducer = {
    counter: counterReducer,
    login: loginReducer
}

const store = configureStore({
    //reducer: { counter: counterSlice.reducer }
    //reducer: counterSlice.reducer
    reducer
})

export default store