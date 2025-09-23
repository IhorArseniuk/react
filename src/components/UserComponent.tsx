import type {UserType} from "../models/UserType.ts";
import type {FC} from "react";
import {Link} from "react-router";

type UserProps={
    user: UserType
}
export const UserComponent:FC<UserProps> = ({user}) => {
    return (
        <div className='border-4 border-amber-700 p-2 bg-emerald-500 gap-5'>
            {Object.entries(user).map(([key,value],index)=>{
                if(index<=10){
                    return (
                        <p key={index}>{key}-{String(value)}</p>
                    )}
                })
            }
            <Link className="border-4 backdrop-blur px-2 py-1 inline-block" to={`users/${user.id}/carts`}>See Details</Link>
        </div>
    );
};
