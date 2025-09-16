import {Link, Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <>        <ul>
            <li><Link to={'jsonplaceholder'}>Users JsonHolder</Link></li>
            <li><Link to={'dummyjson'}>Users Dummyjson</Link></li>

        </ul>
            <Outlet/>
        </>

    )
};
