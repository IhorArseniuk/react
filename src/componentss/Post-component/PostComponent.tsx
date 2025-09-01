import type {PostType} from "../../models/postType.ts";
import type {FC} from "react";
type PostProps={
    post: PostType
}
export const PostComponent :FC<PostProps> = ({post}) => {
    return (
        <div>
            <h1 className='caret-purple-950 text-2xl bottom-1'>{post.id}</h1>
            <h2 className='caret-amber-300 text-3xl border-4 bottom-0.5'>{post.title}</h2>
            <p className='caret-cyan-700 text-xl border-amber-950 border-2'>{post.body}</p>
        </div>
    );
};
