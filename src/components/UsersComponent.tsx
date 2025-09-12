import {Link, Outlet} from "react-router";

export const UsersComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Users in jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Users in dummyjson</Link></li>

            </ul>
            <Outlet/>
        </div>
    );
};
