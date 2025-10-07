import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {CarFormPage} from "../pages/CarFormPage.tsx";

export const routers = createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[
            {path:'cars',element:<CarsPage/>},
            {path:'formCreate',element:<CarFormPage/>}
        ]}
])

