import {useEffect, useState} from "react";
import {usersJsonfetch} from "../services/fetchJsonPlaceholder.ts";
import {UserComponent} from "./UserComponent.tsx";
import type {UserType} from "../model/UserType.ts";

    export const UsersComponent = () => {
        const [users, setUsers]=useState<UserType[]>([]);

        useEffect(()=>{
            usersJsonfetch()
                .then(users=>
                    setUsers(users))
        })

        return (
        <div>
            {users.map((user) => (<UserComponent user={user}/>))}
        </div>
    );
};
