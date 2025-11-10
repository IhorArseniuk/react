import {useFetch} from "../../hooks/UseFetch.tsx";
import type {UserJsonType} from "../../models/json-models/UserJsonType.ts";
import {UserJsonComponent} from "./UserJsonComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

export const UsersJsonComponent = () => {
    const users = useFetch<UserJsonType[]>('users','json')
    const {setTheme}=useContext(ThemeContext)
    return (
        <>
            {users && users.map(user => <UserJsonComponent user={user}/>)}
           <button onClick={()=>setTheme('black')}>Dark mode </button>
            <button onClick={()=>setTheme('light')}>Light mode</button>
        </>
    );
};
