import type {TypeUserDummy} from "../../models/dummy-models/UserDummyType.ts";
import {type FC, useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
import './dummy.css'
type UserProps={
    user: TypeUserDummy
}
export const UserDummyComponent:FC<UserProps> = ({user}) => {
   const {colorTheme}=useContext(ThemeContext)
    return (
        <ul className={colorTheme}>
            {Object.entries(user).map(([key, value],index)=>{
                if(index<8){
                    return(<li key={index}>{key}-{String(value)}</li>)
                }
            })}
        </ul>
    );
};
