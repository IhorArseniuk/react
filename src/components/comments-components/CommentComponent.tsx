import type {FC} from "react";
import type {DummyCommentsType} from "../../models/DummyCommentsType.ts";
 type CommentProps={
     comment:DummyCommentsType
}
export const CommentComponent:FC<CommentProps> = ({comment}) => {
    console.log(comment)
     return (
        <ul>
            {Object.entries(comment).map(([key,value],index)=>{
                if(index<9){
                if(typeof value ==='object'){
                    return (
                        <ul>
                            <li key={index}>{key}</li>
                        {Object.entries(value).map(([key,value],index)=>(
                        <li key={index}>{key}-{String(value)}</li>))}
                        </ul>
                    )}
                    return(<li key={index}>{key}-{String(value)}</li>)
                }
            })}
        </ul>
    );
};
