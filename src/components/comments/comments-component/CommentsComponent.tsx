import {useEffect, useState} from "react";
import type {CommentType} from "../../../models/commentModel.ts";
import {loadComments} from "../../../services/DummyApi.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const[comments, setComments]=useState<CommentType[]>([])

    useEffect(()=>{
       async function commentsApi(){
       const commentsFetch= await loadComments()
        setComments(commentsFetch)
    }
    commentsApi()
    })


    return (
        <div className='grid grid-cols-3 gap-3 '>
            {comments.map((comment: CommentType) => (<CommentComponent comment={comment} key={comment.id}/>))}
        </div>
    );
};
