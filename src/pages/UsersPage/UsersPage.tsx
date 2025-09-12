import {UsersComponent} from "../../components/UsersComponent.tsx";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <>
        <UsersComponent/>
            <Outlet/>
        </>
    );
};
