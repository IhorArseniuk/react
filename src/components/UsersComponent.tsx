import {useEffect, useState} from "react";
import type {UserType} from "../models/UserType.ts";
import {getDummyUsers} from "../service/DummyService.tsx";
import {useSearchParams} from "react-router";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers]=useState<UserType[]>([])
  const [query]=useSearchParams()
    useEffect(()=>{
        getDummyUsers((query.get('count'))||'10')
                .then(res => setUsers(res.users))

    },[query])
    return (
        <div>
            {
                users.map((user:UserType)=><UserComponent user={user}/>)
            }
        </div>
    );
};
