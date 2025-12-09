import {createSlice} from "@reduxjs/toolkit";
import type {UserType} from "../../../models/jsonPLHold/userType.ts";

const inithialValue:UserType[] =[]

export const userSlice = createSlice({
     name:'userSlice',
    initialState: inithialValue,
    reducers:{},
    extraReducer: buiider => buiider
        .addCase()


})

