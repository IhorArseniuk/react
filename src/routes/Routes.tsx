import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UserCartPage} from "../pages/UserCartPage.tsx";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[

            {path:'users',element:<UsersPage/>},

            {path:'users/:userId/carts',element:<UserCartPage/>},
        ]}
])
