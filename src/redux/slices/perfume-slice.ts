import { RootState } from './../../app/store';
import { createSlice } from "@reduxjs/toolkit";
import { Perfume } from "../../types/Perfume";

interface InitialStateType {
    perfumes: Perfume[]
    perfume: Perfume
    loading: boolean
}
const initialState: InitialStateType = {
    perfumes: [],
    perfume: {},
    loading: false,
}
console.log("initialState", initialState);
export const perfumeSlice = createSlice({
    name: "perfume",
    initialState,
    reducers: {
        loadingPerfume(state) {
            state.loading = true;
        },
        fetchPerfumesSuccess(state, action) {
            state.perfumes = action.payload;
            state.loading = false;
        },
    }
});

export const selectPerfumeLoading = (state: RootState) => state.pefume.loading;
export const selectPerfumeList = (state: RootState) => state.pefume.perfumes;

export const { loadingPerfume, fetchPerfumesSuccess } = perfumeSlice.actions;
export default perfumeSlice.reducer;