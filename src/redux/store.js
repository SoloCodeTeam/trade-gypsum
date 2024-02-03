import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./data/index"
import AdminSlice from "./admin/index"

export const store = configureStore({
    reducer:{
        data: DataSlice,
        admin : AdminSlice
    }
})