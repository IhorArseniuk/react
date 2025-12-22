import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadJsonComments} from "../../../axios/axios.ts";

export const loadComments = createAsyncThunk(
    'commentsSlice/LoadComments',async (_,thankAPI)=>{
        try{
            const comments= await loadJsonComments()
            return thankAPI.fulfillWithValue(comments)
        }
        catch(e) {return thankAPI.rejectWithValue(e)}
})
