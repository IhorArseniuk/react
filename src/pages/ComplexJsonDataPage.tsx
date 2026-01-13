import {useAppSelectorHook} from "../redux/hooks/UseAppSelectorHook.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {usersSliceActions} from "../redux/slices/usersSlice/UsersSlice.ts";
import {commentsSliceActions} from "../redux/slices/commentsSlice/CommmentsSlice.ts";
import {postsSliceActions} from "../redux/slices/postsSlice/PostsSlice.ts";

export const ComplexJsonDataPage = () => {
   const {comments:{comments}, users:{users}, posts:{posts} } = useAppSelectorHook(state => state);
   const dispatch = useDispatch();

   useEffect(() => {
       if(!users.length){
           dispatch(usersSliceActions.loadUsers());
       }
       if(!comments.length){
           dispatch(commentsSliceActions.loadComments());
       }
       if(!posts.length){
           dispatch(postsSliceActions.loadPosts());
       }
   },[])

    return (
        <div>
            <div>Users

                {users.map((user)=>(<div>{user.name}-{user.id}</div>))}
        </div>
            <div> Posts

            {posts.map((post)=>(<div>{post.title}-{post.id}</div>))}

        </div>
            <div>Comments

            {comments.map((comment)=>(<div>{comment.name}-{comment.id}</div>))}
        </div>
        </div>
    );
};
