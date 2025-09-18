import {Outlet} from "react-router-dom";
import {Link} from "react-router";

export const MenuComponent = () => {

    return (
        <>
        <ul>
            <li><Link to={'users'}>Users Page</Link></li>
            <li><Link to={'posts'}>Posts Page</Link></li>
        </ul>
            <Outlet/>
        </>
    );
};
