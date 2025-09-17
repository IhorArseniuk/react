import {Link, Outlet} from "react-router";

export const CommentsPage = () => {
    return (
        <><ul>
            <li><Link to={'jsonplaceholder'}>Comments JsonHolder</Link></li>
            <li><Link to={'dummyjson'}>Comments Dummyjson</Link></li>

        </ul>
            <Outlet/></>
    );
};
