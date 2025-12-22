
import {useAppSelectorHook} from "../redux/hooks/UseAppSelectorHook.tsx";
import {useDispatchHook} from "../redux/hooks/UseDispatchHook.tsx";
import {useEffect} from "react";
import {loadPosts} from "../redux/slices/postsSlice/LoadPosts.ts";

export const PostsJsonPage = () => {

    const posts = useAppSelectorHook((state)=> state.posts.posts)

    const dispatch = useDispatchHook()

    useEffect(()=>{
        dispatch(loadPosts())

    },[dispatch])

    return (
        <>
            {posts && posts.map(( post)=>(
                <div key={post.id}>{post.title}<br/>{post.body}</div>
            ))}
        </>
    );
};
