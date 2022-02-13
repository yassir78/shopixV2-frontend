import { combineReducers } from "@reduxjs/toolkit";

import perfumeReducer from "./slices/perfume-slice";
const rootReducer = combineReducers({
    perfumes: perfumeReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export default rootReducer;
