import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}> Show Users</Link></li>
                <li><Link to={'posts'}>Show Posts</Link></li>
                <li><Link to={'comments'}>Show Comments</Link></li>
            </ul>
        </div>
    );
};
