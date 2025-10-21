import {useNavigate} from "react-router";

export const ResourcesMenuComponent = () => {
    const navigate= useNavigate()
    const navigateRoute=(route:string)=>{
        navigate(route)
    }
    return (
        <div>
            <ul>
                <li onClick={()=>{navigateRoute('products')}} >Products</li>
                <li onClick={()=>{navigateRoute('carts')}}>Carts</li>
                <li onClick={()=>{navigateRoute('users')}}>Users</li>
                <li onClick={()=>{navigateRoute('posts')}}>Posts</li>
                <li onClick={()=>{navigateRoute('comments')}}>Comments</li>
                <li onClick={()=>{navigateRoute('todos')}}>Todos</li>
                <li onClick={()=>{navigateRoute('quotes')}}>Quotes</li>
            </ul>
        </div>
    );
};
