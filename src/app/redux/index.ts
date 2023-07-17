import { configureStore } from "@reduxjs/toolkit";
import DateReducer from "./DateReducer";
export const store = configureStore({
    reducer: {
        date: DateReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch