import type {UserJsonType} from "../../models/json-models/UserJsonType.ts";
import {type FC, useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
import './json.css'

type UserProps={
    user : UserJsonType
}
export const UserJsonComponent:FC<UserProps> = ({user}) => {
    const {colorTheme} = useContext(ThemeContext)
    return (
        <ul className={colorTheme}>
            {Object.entries(user).map(([key,value],index)=>{
                if(index<3){
                    return(
                        <li key={index}>{key}-{String(value)}</li>
                    )
                }
            })}
        </ul>
    );
};
