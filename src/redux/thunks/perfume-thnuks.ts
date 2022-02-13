import { createAsyncThunk } from "@reduxjs/toolkit"
import requestService from "../../utils/request-service"
import { fetchPerfumesSuccess, loadingPerfume } from "../slices/perfume-slice"


export const fetchPerfumes = createAsyncThunk(
    'perfumes/fetchPerfumes',
    async (arg, { dispatch, getState }) => {
        dispatch(loadingPerfume())
        const response = await requestService.get("/products", true);
        dispatch(fetchPerfumesSuccess(response.data))
    }
)