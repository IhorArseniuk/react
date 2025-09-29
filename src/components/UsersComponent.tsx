import {useEffect, useState} from "react";
import type {UserType} from "../models/UserType.ts";
import {useSearchParams} from "react-router";
import {getDummyUsers} from "../service/UsersDummyService.tsx";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
const [users, setUsers]=useState<UserType[]>([])
    const[query]=useSearchParams({})
   useEffect(()=>{
       getDummyUsers(query.get('count')|| '10','10')
           .then(res=>{
               setUsers(res.users)
           })
   },[query])
    return (
        <div>
            {users.map((user)=><UserComponent user={user}/>)}
        </div>
    );
};
