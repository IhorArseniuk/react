import type {CommentType} from "../../../models/commentModel.ts";
import type {FC} from "react";

type CommentProps={
    comment:CommentType;
}
export const CommentComponent :FC<CommentProps>= ({comment}) => {
    return (
        <div className='border-4 bg-emerald-500 flex flex-col gap-1 p-6 justify-center'>
            <h1 className='text-amber-800'>{comment.id}</h1>
            <p className='text-fuchsia-600'>{comment.body}</p>
            <h3 className='text-pink-600'>{comment.user.username}-{comment.user.fullName}</h3>
            <p>{comment.likes}</p>
        </div>
    );
};
