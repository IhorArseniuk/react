import {useNavigate} from "react-router";

export const MenuComponent = () => {
   const navigate = useNavigate()
    const handleClick = (path:string)=>{
       navigate(path)}

    return (
        <div>
            <button onClick={()=>handleClick('users')}>Users Page</button>
            <button onClick={()=>handleClick('posts')}>Posts Page</button>
        </div>
    );
};
