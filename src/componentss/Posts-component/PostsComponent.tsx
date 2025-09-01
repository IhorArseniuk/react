import type {PostType} from "../../models/postType.ts";
import {useEffect, useState} from "react";
import {getPosts} from "../../sevices/JsplajeholdPosts.ts";
import {PostComponent} from "../Post-component/PostComponent.tsx";
import './posts.css'
export const PostsComponent = () => {
    const [posts, setPosts]=useState<PostType[]>([]);
    useEffect(() => {
                 getPosts()
                     .then(posts=>
                     setPosts(posts))
    }, []);
    return (
        <div className={'Posts-container'}>
            {posts.map(post=>(<PostComponent key={post.id} post={post}/>))}
        </div>
    );
};
