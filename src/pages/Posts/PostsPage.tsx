import {Link, Outlet} from "react-router";

export const PostsPage = () => {
    return (
        <><ul>
            <li><Link to={'jsonplaceholder'}>Posts JsonHolder</Link></li>
            <li><Link to={'dummyjson'}>Posts Dummyjson</Link></li>

        </ul>
            <Outlet/>
            </>
    );
};
