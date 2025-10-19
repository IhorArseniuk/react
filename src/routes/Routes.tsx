import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {AuthLoginPage} from "../pages/AuthLoginPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {ResourcesCategoryPage} from "../pages/ResourcesCategoryPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {TodosPage} from "../pages/TodosPage.tsx";
import {QuotesPage} from "../pages/QuotesPage.tsx";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[
            {index:true,element:<HomePage/>},
            {path:'login',element:<AuthLoginPage/>, children:[
                    {path:'resources',element:<ResourcesCategoryPage/>,children:[
                            {path:'products',element:<ProductsPage/>},
                            {path:'carts',element:<CartsPage/>},
                            {path:'users',element:<UsersPage/>},
                            {path:'posts',element:<PostsPage/>},
                            {path:'comments',element:<CommentsPage/>},
                            {path:'todos',element:<TodosPage/>},
                            {path:'quotes',element:<QuotesPage/>}
                        ]}
                ]}
        ]}
])
