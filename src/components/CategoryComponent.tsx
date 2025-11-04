import {useNavigate} from "react-router";

export const CategoryComponent = () => {
    const navigate=useNavigate()
    return (
        <ul>
            <li className={' w-20 bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 '} onClick={()=>{
                navigate('users')
            }}>Users</li>
            <li className={' w-20 bg-lime-500 hover:bg-lime-600 focus:outline-2 focus:outline-offset-2 focus:outline-lime-500 active:bg--700 '} onClick={()=>{
                navigate('products')}}>Products</li>
            <li className={' w-20 bg-pink-500 hover:bg-pink-600 focus:outline-2 focus:outline-offset-2 focus:outline-pink-500 active:bg--700 '} onClick={()=>{
                navigate('recipes')}}>Recipes</li>
        </ul>
    );
};
