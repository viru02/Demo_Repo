import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchItems } from "../JsonApi";

export const fetchItemsAsync = createAsyncThunk('fetchItems', async()=>{
    const data = await fetchItems();
    return data;
});


const initialState = {
    value: 0,
    isLoading: false,
    data: [],
    isError: false,
    singleData: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchItemsAsync.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchItemsAsync.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchItemsAsync.rejected, (state, action)=>{
            console.log("Error",action.payload);
            state.isError = true;
        })
    }

})

export const {increment, decrement} = appSlice.actions

export default appSlice.reducer