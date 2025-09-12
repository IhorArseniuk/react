import {Link, Outlet} from "react-router";

export const PostsComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Posts in jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Posts in dummyjson</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};
