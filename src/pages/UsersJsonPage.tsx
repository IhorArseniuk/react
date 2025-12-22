import {useEffect} from "react";

import {useAppSelectorHook} from "../redux/hooks/UseAppSelectorHook.tsx";
import {useDispatchHook} from "../redux/hooks/UseDispatchHook.tsx";
import {loadUsers} from "../redux/slices/usersSlice/LoadUsers.ts";


export const UsersJsonPage = () => {
const users =useAppSelectorHook(state => state.users.users);
    const dispatch =useDispatchHook()

    useEffect(()=>{
       dispatch(loadUsers())

   },[dispatch])

    return (
        <>
            <h1>Users</h1>
            {users && users.map((user,index)=>(
                <div key={index}>{user.id}</div>
            ))}
        </>
    );
};
