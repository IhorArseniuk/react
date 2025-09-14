import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersPage} from "../pages/Users/UsersPage.tsx";
import {UsersJsonPlaceHolderPage} from "../pages/Users/UsersJsonPlaceHolderPage.tsx";
import {UsersDummyJsonPage} from "../pages/Users/UsersDummyJsonPage.tsx";
import {PostsPage} from "../pages/Posts/PostsPage.tsx";
import {PostsJsonPlaceHolderPage} from "../pages/Posts/PostsJsonPlaceHolderPage.tsx";
import {PostsDummyJsonPage} from "../pages/Posts/PostsDummyJsonPage.tsx";
import {CommentsPage} from "../pages/Comments/CommentsPage.tsx";

export const routers=createBrowserRouter([
    {path:'/',element:<App/>,children:[

        {path:'users',element:<UsersPage/>,children:[
                    {path:'jsonplaceholder',element:<UsersJsonPlaceHolderPage/>},
                    {path:'dummyjson',element:<UsersDummyJsonPage/>}
                ]},

            {path:'posts',element:<PostsPage/>, childre:[
                    {path:'jsonplaceholder',element:<PostsJsonPlaceHolderPage/>},
                     {path:'dummyjson',element:<PostsDummyJsonPage/>}
                ]},

            {path:'comments',element:<CommentsPage/>,children:[
                    {path:'jsonplaceholder',element:<PostsJsonPlaceHolderPage/>},
                    {path:'dummyjson',element:<PostsDummyJsonPage/>}
                ]}


        ]}
])
