import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";


import {UsersPage} from "../pages/UsersPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";

export const routes = createBrowserRouter([
{path:'/',element:<MainLayout/>, children:[

             { path:'users', element:<UsersPage/>},
                 {path:'products',element:<ProductsPage/>},
                 {path:'recipes',element:<RecipesPage/>},

    ] }]
)
