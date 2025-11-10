import {useFetch} from "../../hooks/UseFetch.tsx";
import type { UserDummyType} from "../../models/dummy-models/UserDummyType.ts";
import {UserDummyComponent} from "./UserDummyComponent.tsx";
import type {BaseDummyType} from "../../models/dummy-models/BaseDummyType.ts";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

export const UsersDummyComponent = () => {
   const {setTheme}=useContext(ThemeContext)
    const resource = useFetch<BaseDummyType  & {users:UserDummyType[]}>('users','dummy')?.users
    return (
        <>
            {resource && resource.map((user)=><UserDummyComponent user={user}/>)}
        <button onClick={()=>setTheme('dark')} >Dark theme</button>
            <button onClick={()=>setTheme('light')}>Light theme</button>
        </>
    );
};
