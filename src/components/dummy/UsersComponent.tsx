import {useFetch} from "../../hooks/UseFetch.tsx";
import type {TypeUserDummy} from "../../models/UserDummyType.ts";
import {UserComponent} from "./UserComponent.tsx";
import type {BaseDummytype} from "../../models/BaseDummyType.ts";

export const UsersComponent = () => {
    const resource = useFetch<BaseDummytype  & {users:TypeUserDummy[]}>('users','dummy')?.users
    return (
        <>{resource && resource.map((user)=><UserComponent user={user}/>)}</>
    );
};
