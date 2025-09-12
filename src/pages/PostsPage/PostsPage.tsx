
import {PostsComponent} from "../../components/PostsComponent.tsx";
import {Outlet} from "react-router";

export const PostsPage = () => {
    return (
     <>
     <PostsComponent/>
     <Outlet/></>
    );
};
