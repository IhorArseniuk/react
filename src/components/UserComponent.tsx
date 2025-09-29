import type {UserType} from "../models/UserType.ts";
import type {FC} from "react";

type UserProps={
    user:UserType
}
export const UserComponent:FC<UserProps> = ({user}) => {
    return (
        <div>
            <ul>
            {Object.entries(user).map(([key,value],index)=>{
if(index<=10){
    return(
        <li key={index}>{key}-{String(value)}</li>
    )
}
            } )}
            </ul>
        </div>
    );
};
