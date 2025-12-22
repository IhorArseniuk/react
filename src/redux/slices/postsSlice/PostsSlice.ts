import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {PostType} from "../../../models/jsonPLHold/postType.ts";
import {loadPosts} from "./LoadPosts.ts";

type PostsType={
    posts:PostType[]
}
const initValue:PostsType={
    posts : []
}


export const postsSlice = createSlice({
     name:'posts',
    initialState: initValue,
    reducers:{},
    extraReducers: builder=> builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<PostType[]>)=>{
            state.posts = action.payload
        })
        .addCase( loadPosts.rejected, (state)=>{
            console.log(state)
        })

})
