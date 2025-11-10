import type {PhotoJsonType} from "../../models/json-models/PhotosJsonType.ts";
import {type FC, useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

type PhotoProps={
    photo :PhotoJsonType
}
export const PhotoComponent:FC<PhotoProps> = ({photo}) => {
    const {colorTheme}=useContext(ThemeContext)
    return (
        <ul className={colorTheme}>
            {Object.entries(photo).map(([key,value],index)=>{
                if(key==='thumbnailUrl'){
                    return(
                        <img key={index} src={String(value)}/>
                    )
                }
                else return <li key={index}>{key}-{String(value)}</li>
            })}
        </ul>
    );
};
