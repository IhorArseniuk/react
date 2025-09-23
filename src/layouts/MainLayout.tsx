
import {Outlet} from "react-router";
import {UsersPage} from "../pages/UsersPage.tsx";

export const MainLayout = () => {
    return (
        <div className='flex gap-52 justify-center'>
            <UsersPage/>
        <Outlet/></div>
    );
};
