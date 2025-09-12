import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments/jsonplaceholder'}>Comments</Link></li>
            </ul>
        </div>
    );
};
