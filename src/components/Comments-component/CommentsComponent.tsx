import type {CommentModel} from "../../models/comentModel.ts";
import {useEffect, useState} from "react";
import {getComments} from "../../services/commentsApi.ts";
import {CommentComponent} from "../Comment-component/CommentComponent.tsx";
import './coments.css'
export const CommentsComponent = () => {

    const[comments,setComments]=useState<CommentModel[]>([]);

    useEffect(()=>{
    async function LoadComments(){
        const res=await getComments()
         setComments(res);
    }
    LoadComments();
})
    return (
        <div className={'components-container'}>{comments.map((comment)=>(<CommentComponent comment={comment} key={comment.id}/>))}</div>
    );
};
