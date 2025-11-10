import {useFetch} from "../../hooks/UseFetch.tsx";
import type {PostJsonType} from "../../models/json-models/PostJsonType.ts";
import {PostComponent} from "./PostComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

export  const  PostsJsonComponent   = () => {
    const posts = useFetch<PostJsonType[]>('posts','json')
    const {setTheme}=useContext(ThemeContext);
    return (
        <>
            {posts && posts.map((post) =><PostComponent post={post}/>)}
        <button onClick={()=>setTheme('black')}>Dark mode</button>
            <button onClick={()=>setTheme('light')}>Light mode</button>
        </>
    );
};
