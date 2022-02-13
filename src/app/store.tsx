import { configureStore } from "@reduxjs/toolkit";
import perfumeReducer from '../redux/slices/perfume-slice';
export const store = configureStore({
    reducer: {
        pefume:perfumeReducer
    },

})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;