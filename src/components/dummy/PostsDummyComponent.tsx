import {useFetch} from "../../hooks/UseFetch.tsx";
import type {BaseDummyType} from "../../models/dummy-models/BaseDummyType.ts";
import type {PostsDummyType} from "../../models/dummy-models/PostsDummyType.ts";
import {PostDummyComponent} from "./PostDummyComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

export const PostsDummyComponent = () => {
    const posts= useFetch<BaseDummyType & {posts:PostsDummyType[]}>('posts','dummy')?.posts
     const {setTheme}=useContext(ThemeContext)
    return (
        <>
            {posts && posts.map(post => <PostDummyComponent key={post.id} post={post}/>)}
            <button onClick={()=>setTheme('black')}>Dark mode</button>
            <button onClick={()=>setTheme('light')}>Light mode</button>
        </>
    );
};
