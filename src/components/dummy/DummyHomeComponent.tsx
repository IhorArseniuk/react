import {useNavigate} from "react-router";
import {useContext} from "react";
import '../Menu.css'
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
export const DummyHomeComponent = () => {
    const navigate= useNavigate()
   const {colorTheme, setTheme} = useContext(ThemeContext)
    const onButtonClickLight =()=>{setTheme('light') }

    const onButtonClickBlack =()=>{ setTheme('black')}

    return (
        <ul className={colorTheme}>
            <li onClick={()=>navigate('users')}>Users</li>
            <li onClick={()=>navigate('products')}>Products</li>
            <li onClick={()=>navigate('posts')}>Posts</li>
            <button onClick={()=>onButtonClickBlack()}>Dark Mode</button>
            <button onClick={()=>onButtonClickLight()}>Light Mode</button>
        </ul>
    );
};
