import type {UserType} from "../models/UserType.ts";
import type {FC} from "react";

type UserProps={
    user:UserType,
}
export const UserComponent :FC<UserProps>= ({user}) => {
    return (
        <div>
            {Object.entries(user).map(([key,value],index)=> {
             if(index<=10) {
              return(   <li>{key}-{String(value)}</li>)
             }})}
        </div>
    );
};
