import {createAsyncThunk} from "@reduxjs/toolkit";
import {loadJsonUsers} from "../../../axios/axios.ts";

export  const loadUsers = createAsyncThunk(
    'usersSlice/LoadUsers',
    async (_, thunkAPI)=> {
        try {
            const users = await loadJsonUsers()
            return thunkAPI.fulfillWithValue(users )
        }
        catch(e){
            return thunkAPI.rejectWithValue(e )
        }
    }
)
