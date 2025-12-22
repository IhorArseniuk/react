import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CommentType} from "../../../models/jsonPLHold/commentType.ts";
import {loadComments} from "./LoadComments.ts";

type  CommentsType= {
    comments: CommentType[]
}
const initValue:CommentsType= {
    comments: []
}

export const commentsSlice= createSlice({
    name:'comments',
    initialState: initValue,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<CommentType[]>)=>{
            state.comments=action.payload
        })
        .addCase( loadComments.rejected, ( action)=>{
            console.log(action)
        })
})
