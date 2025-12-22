import {Link, Outlet} from "react-router";

export const HomePage = () => {
    return (
        <>
        <h1>HOME</h1>

            <h1><Link to={'users'}>users</Link></h1>
            <h1><Link to={'posts'}>posts</Link></h1>
            <h1><Link to={'comments'}>comments</Link></h1>
            <Outlet/>
        </>
    );
};
