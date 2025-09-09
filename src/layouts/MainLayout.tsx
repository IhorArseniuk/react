import {Outlet} from "react-router-dom";
import {Menu} from "../pages/Menu.tsx";

export const MainLayout = () => {
    return (
        <div>
           <Menu/>
            <Outlet/>
        </div>
    );
};
