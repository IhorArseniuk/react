import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {JsonHomePage} from "../pages/json/JsonHomePage.tsx";
import {UsersJsonPage} from "../pages/json/UsersJsonPage.tsx";
import {ProductsJsonPage} from "../pages/json/ProductsJsonPage.tsx";
import {PostsJsonPage} from "../pages/json/PostsJsonPage.tsx";
import {DummyHomePage} from "../pages/dummy/DummyHomePage.tsx";
import {UsersDummyPage} from "../pages/dummy/UsersDummyPage.tsx";
import {ProductsDummyPage} from "../pages/dummy/ProductsDummyPage.tsx";
import {PostsDummyPage} from "../pages/dummy/PostsDummyPage.tsx";

export const routes =createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[
        {path:'json',element:<JsonHomePage/>,children:[
                {path:'users',element:<UsersJsonPage/>},
                {path:'products',element:<ProductsJsonPage/>},
                {path:'posts',element:<PostsJsonPage/>},
            ]},
            {path:'dummy',element:<DummyHomePage/>,children:[
                {path:'users',element:<UsersDummyPage/>},
                    {path:'products',element:<ProductsDummyPage/>},
                    {path:'posts',element:<PostsDummyPage/>},
                ]}
        ]}
])
