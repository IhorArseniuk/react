import type {PostJsonType} from "../../models/json-models/PostJsonType.ts";
import {type FC, useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

type PostProp={
    post: PostJsonType
}
export const PostComponent:FC<PostProp> = ({post}) => {
   const {colorTheme}=useContext(ThemeContext)
    return (
        <ul className={colorTheme}>
            {Object.entries(post).map(([key,value],index)=>(
                <li key={index}>{key}-{String(value)}</li>
            ))}
        </ul>
    );
};
