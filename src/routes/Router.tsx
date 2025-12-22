import {createBrowserRouter} from "react-router";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersJsonPage} from "../pages/UsersJsonPage.tsx";
import {PostsJsonPage} from "../pages/PostsJsonPage.tsx";
import {CommentsJsonPage} from "../pages/CommentsJsonPage.tsx";
import {ComplexJsonDataPage} from "../pages/ComplexJsonDataPage.tsx";

export const routes = createBrowserRouter([
{path:'/', element:<HomePage/>, children:[
        {path: 'posts', element:<PostsJsonPage/>},
        {path: 'comments', element:<CommentsJsonPage/>},
        {path: 'users',element:<UsersJsonPage/>},
        {path: 'complex',element:<ComplexJsonDataPage/>}
    ]}
])
