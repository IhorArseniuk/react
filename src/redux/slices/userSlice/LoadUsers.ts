import {createAsyncThunk} from "@reduxjs/toolkit";

const LoadUsers = createAsyncThunk(
    'userSlice/LoadUsers',
    async (_, thunkAPI)=> {
        try {
            const users = await LoadUsers()
            return thunkAPI.fulfillWithValue(users)
        }
        catch(e){
            return thunkAPI.rejectWithValue('error')
        }
    }
)
