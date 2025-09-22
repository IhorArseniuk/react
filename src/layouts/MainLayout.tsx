import {UsersPage} from "../pages/UsersPage.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <><UsersPage/>
        <Outlet/></>
    );
};
