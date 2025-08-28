import type {UserType} from "../../models/userType.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../../src/services/jsonplaceholderTodos.ts";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import './Todos.css'

export const TodosComponent = () => {

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
           console.log(user);

    return (
        <div className={'users-holder'}>

          <div className={'users'} >  { users.map(user =><TodoComponent user={user} key={user.id} userInfo={userInfo}/>)}</div>
            <div className={'user-info'}>{user ? <div><h1>{user.id}</h1><h2>{String(user.completed)}</h2><h3>{user.title}</h3></div> : null}</div>

        </div>
    );
};
