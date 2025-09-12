import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";
import {UsersJsonPlaceHolderPage} from "../pages/UsersPage/UsersJsonPlaceHolderPage.tsx";
import {UsersDummyJsonPage} from "../pages/UsersPage/UsersDummyJsonPage.tsx";
import {PostsPage} from "../pages/PostsPage/PostsPage.tsx";
import {PostsJsonPlaceHolderPage} from "../pages/PostsPage/PostsJsonPlaceHolderPage.tsx";
import {PostsDummyJsonPage} from "../pages/PostsPage/PostsDummyJsonPage.tsx";
import {CommentsPage} from "../pages/Comments/CommentsPage.tsx";

export const router = createBrowserRouter([
        {path:'/', element:<App/>,children:[

            {path:'users',element:<UsersPage/>,children:[
                        {path:'jsonplaceholder',element:<UsersJsonPlaceHolderPage/>},
                        {path:'dummyjson',element:<UsersDummyJsonPage/>}

                    ]},

                {path:'posts',element:<PostsPage/>,children:[
                        {path:'jsonplaceholder',element:<PostsJsonPlaceHolderPage/>},
                        {path:'dummyjson',element:<PostsDummyJsonPage/>}
                    ]},

                {path:'comments/jsonplaceholder',element:<CommentsPage/>}

            ]}
    ])

