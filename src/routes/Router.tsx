import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routers = createBrowserRouter([
    {path:'/',element:<MainLayout/> , children:[
    {index:true,element:<UsersPage/>}]}
])
