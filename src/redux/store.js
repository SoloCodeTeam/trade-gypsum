import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./data/index"

export const store = configureStore({
    reducer:{
        data: DataSlice
    }
})