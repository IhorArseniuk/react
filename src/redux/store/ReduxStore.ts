import {configureStore} from "@reduxjs/toolkit";
import {usersSlice} from "../slices/usersSlice/UsersSlice.ts";
import {postsSlice} from "../slices/postsSlice/PostsSlice.ts";
import {commentsSlice} from "../slices/commentsSlice/CommmentsSlice.ts";


export const store = configureStore({
    reducer:{
        users : usersSlice.reducer,
        posts : postsSlice.reducer,
        comments : commentsSlice.reducer,
    }
})
