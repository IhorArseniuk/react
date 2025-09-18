import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

export const Routers = createBrowserRouter([
    {path:'/',element:<App/> ,children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>}
        ]}
])
