import {useNavigate} from "react-router";

export const ResourcesMenuComponent = () => {
    const navigate= useNavigate()
    return (
        <div>
            <ul>
                <li onClick={()=>{navigate('products')}} >Products</li>
                <li onClick={()=>{navigate('carts')}}>Carts</li>
                <li onClick={()=>{navigate('users')}}>Users</li>
                <li onClick={()=>{navigate('posts')}}>Posts</li>
                <li onClick={()=>{navigate('comments')}}>Comments</li>
                <li onClick={()=>{navigate('todos')}}>Todos</li>
                <li onClick={()=>{navigate('quotes')}}>Quotes</li>
            </ul>
        </div>
    );
};
