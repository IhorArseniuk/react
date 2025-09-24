import type {UserType} from "../models/UserType.ts";
import {type FC} from "react";
import {useNavigate} from "react-router";


type UserProps={
    user: UserType
}
export const UserComponent:FC<UserProps> = ({user}) => {
    const navigate = useNavigate()
    const onButtonClickNavigate = ()=>{navigate(`users/${user.id}/carts`)};

    return (
        <div className='flex flex-col border-4 bg-violet-300 border-amber-700 gap-5 text-fuchsia-950 p-6' >
            {Object.entries(user).map(([key,value],index)=>{
                if(index<=10){
                    return (
                        <p key={index}>{key}-{String(value)}</p>
                    )}
                })
            }
            <button onClick={onButtonClickNavigate } className="border-4 backdrop-blur px-2 py-1 inline-block">See Details</button>
        </div>
    );
};
