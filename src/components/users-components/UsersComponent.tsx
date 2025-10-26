import {useEffect, useState} from "react";

import {DummyRefresh, getDummyResource} from "../../service/DummyService.ts";

import type {DummyUsersType} from "../../models/DummyUsersType.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers]=useState<DummyUsersType[]>([])
    useEffect(() => {
        getDummyResource('users')
            .then(res=>{
                if(res.users){
                    setUsers(res.users)
                }
            })
            .catch(errors =>{
                console.log(errors)
                DummyRefresh()
                    .then(()=>{
                        getDummyResource('users')
                            .then(res=>{
                                if(res.users){
                                    setUsers(res.users)
                                }
                            })
                    })
            })
    },[])
    return (
        <div>
            <b>Users</b>
            {users.map((user)=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};
