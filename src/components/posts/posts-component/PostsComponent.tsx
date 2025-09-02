import {useEffect, useState} from "react";
import type {PostType} from "../../../models/postModel.ts";
import {loadPosts} from "../../../services/DummyApi.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const[posts, setPosts]=useState<PostType[]>([]);

    useEffect(()=>{
      loadPosts()
          .then(response=>{
              const{posts}=response;
              setPosts(posts)
          })

          })

    return (
        <div className='grid grid-cols-2 gap-3 p-2'>
            {posts.map((post) => (<PostComponent post={post} key={post.id}/>))}
        </div>
    );
};
