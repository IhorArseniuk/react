import {useEffect, useState} from "react";

import {DummyRefresh, getDummyResource} from "../../service/DummyService.ts";
import type {DummyPostsType} from "../../models/DummyPostsType.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts]=useState<DummyPostsType[]>([])
    useEffect(() => {
        getDummyResource('posts')
            .then(res=>{
                if(res.posts){
                    setPosts(res.posts)
                }
            })
            .catch(errors =>{
                console.log(errors)
                DummyRefresh()
                    .then(()=>{
                        getDummyResource('posts')
                            .then(res=>{
                                if(res.posts){
                                    setPosts(res.posts)
                                }
                            })
            })
    })
    },[])
    return (
        <div>
            <b>Posts</b>
            {posts.map((post)=><PostComponent key={post.id} post={post}/>)}
        </div>
    );
};
