import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./login/index"
import LoginSlice from "./login/index"

export const store = configureStore({
    reducer:{
        data: DataSlice,
        login: LoginSlice
    }
})