import type {FC} from "react";
import type {DummyPostsType} from "../../models/DummyPostsType.ts";

type PostProp = {
    post : DummyPostsType
}
export const PostComponent:FC<PostProp> = ({post}) => {

    return (
        <ul>
            {Object.entries(post).map(([key,value],index)=>{
                   if(typeof value === 'object'){
                       return(
                           <ul>
                              <p> {key}</p>
                               {Object.entries(value).map(([key,value],index)=>(
                                   <li key={index}>{key}-{String(value)}</li>
                               ))}
                           </ul>
                       )
                   }
                if(Array.isArray(value)){
                    return(
                        <ul>
                            { value.map((Item)=>{

                                if (typeof Item ==='object' && Item!==null) {
                                    return (<li>
                                        {Object.entries(Item).map(([obKey, obVal], index) => {
                                            return (
                                                <li key={index}>{obKey}-{String(obVal)}</li>
                                            )
                                        })}
                                    </li> )
                                }})}
                        </ul>
                    )}
                return(
                    <li key={index}>{key}-{String(value)}</li>
                )
            })}
        </ul>
    );
};
