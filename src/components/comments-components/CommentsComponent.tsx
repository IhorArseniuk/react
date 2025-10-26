import {useEffect, useState} from "react";
import type {DummyCommentsType} from "../../models/DummyCommentsType.ts";
import {DummyRefresh, getDummyResource} from "../../service/DummyService.ts";
import {CommentComponent} from "./CommentComponent.tsx";


export const CommentsComponent = () => {
    const [comments,setComments]=useState<DummyCommentsType[]>([])
   useEffect(()=>{
       getDummyResource('comments')
           .then(res=>{
               if(res.comments) {setComments(res.comments)}
           })
           .catch(errors=>{
               console.log(errors)
                   DummyRefresh()
                       .then(()=>{ getDummyResource('comments')
                           .then(res=>{
                               if(res.comments) {
                                   setComments(res.comments)
                               }
                           })
                   })
           })
   },[])
    return (
        <div>
            <b>Comments</b>
            {comments.map((comment)=><CommentComponent comment={comment} key={comment.id}/>)}</div>
    );
};
