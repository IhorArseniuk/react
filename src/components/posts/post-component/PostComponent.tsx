import type {PostType} from "../../../models/postModel.ts";
import type {FC} from "react";

type PostProps={
    post:PostType
}
export const PostComponent:FC<PostProps> = ({post}) => {
    return (
        <div className='border-2 border-amber-700 flex flex-col gap-3  justify-center align-middle '>
            <h1>{post.title}</h1>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <h3 className='border-2 border-amber-950'>Tags#
            {post.tags.map((tag)=>(<p>{tag}</p>))}
            </h3>
            <p> {post.reactions.likes}</p>
            <p>{post.reactions.dislikes}</p>
            <p>{post.views}</p>
        </div>
    );
};
