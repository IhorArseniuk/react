import type {UserType} from "../../models/userType.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../../api/jsonplaceholderTodos.ts";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";

export const TodoComponents = () => {
           const[users, setUsers]=useState<UserType[]>([]);
           useEffect(() => {
                         getUsers()
                             .then(users => setUsers(users));
           return ()=>{
               console.log('complete')
           }},[]);

           const [user, setUser]=useState<UserType|null>(null)
           const userInfo=(userIn:UserType)=>{
               setUser(userIn)
           }

    return (
        <div>
            { user &&<div><h1>{user?.id}</h1><h2>{user?.title}</h2><h3>{user?.completed}</h3></div>}
            {users.map(user =><TodoComponent user={user} key={user.id} userInfo={userInfo}/>)}
        </div>
    );
};
