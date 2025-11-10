import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {JsonHomePage} from "../pages/json/JsonHomePage.tsx";
import {UsersJsonPage} from "../pages/json/UsersJsonPage.tsx";
import {PhotoJsonPage} from "../pages/json/PhotoJsonPage.tsx";
import {PostsJsonPage} from "../pages/json/PostsJsonPage.tsx";
import {DummyHomePage} from "../pages/dummy/DummyHomePage.tsx";
import {UsersDummyPage} from "../pages/dummy/UsersDummyPage.tsx";
import {ProductsDummyPage} from "../pages/dummy/ProductsDummyPage.tsx";
import {PostsDummyPage} from "../pages/dummy/PostsDummyPage.tsx";
import {MenuComponent} from "../components/MenuComponent.tsx";

export const routes =createBrowserRouter([
    {path:'/',element:<MainLayout/>},
            {path:'resource', element: <MenuComponent/>, children:[
        {path:'json',element:<JsonHomePage/>,children:[
                {path:'users',element:<UsersJsonPage/>},
                {path:'products',element:<PhotoJsonPage/>},
                {path:'posts',element:<PostsJsonPage/>},
            ]},
            {path:'dummy',element:<DummyHomePage/>,children:[
                {path:'users',element:<UsersDummyPage/>},
                    {path:'products',element:<ProductsDummyPage/>},
                    {path:'posts',element:<PostsDummyPage/>},
                ]}
                ]}

])
