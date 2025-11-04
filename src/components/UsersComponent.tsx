import {useFetch} from "../hooks/UseFetch.tsx";
import type {TypeUserDummy} from "../models/TypeUserDummy.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
   const  users = useFetch<TypeUserDummy>('users')
    return (
        <>
            {users.map(user => <UserComponent user={user} />)}
        </>
    );
};
