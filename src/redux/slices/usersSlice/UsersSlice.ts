import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserType} from "../../../models/jsonPLHold/userType.ts";
import {loadUsers} from "./LoadUsers.ts";

type UserInitType={
    users: UserType[],
}

const initialValue:UserInitType={
    users: []
}

export const usersSlice = createSlice({
     name:'users',
    initialState: initialValue,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled,(state, action:PayloadAction<UserType[]>)=>{
            state.users= action.payload
        })
        .addCase(loadUsers.rejected, (state)=>{
            console.log(state)
        })
})

