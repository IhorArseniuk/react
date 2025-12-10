import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "../slices/userSlice/UsersSlice.ts";


export const store = configureStore({
    reducer:{
        users : usersSlice.reducer
    }
})
