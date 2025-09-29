import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";


export const routers=createBrowserRouter([
    {path:'/',element:<MainLayout/>}
])
