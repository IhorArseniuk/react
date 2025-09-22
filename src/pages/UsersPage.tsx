import {UsersComponent} from "../components/UsersComponent.tsx";
import {urls} from "../urls/Urls.tsx";

export const UsersPage = () => {
    return (
        <><UsersComponent url={urls.dummyJson.users.getAllUsers} dataArrayName={'users'}/></>
    );
};
