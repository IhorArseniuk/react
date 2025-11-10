import type {PostsDummyType} from "../../models/dummy-models/PostsDummyType.ts";
import {type FC, useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

type PostProps = {
    post: PostsDummyType
}
export const PostDummyComponent:FC<PostProps> = ({post}) => {
   const {colorTheme}=useContext(ThemeContext)
    return (
        <ul className={colorTheme}>
            {Object.entries(post).map(([key,value],index)=>{
                if(index<2){
                    return(
                        <li key={index}>{key}-{String(value)}</li>
                    )
                }
            })}
        </ul>
    );
};
