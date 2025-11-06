import {useNavigate} from "react-router";
import { useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext.tsx";
import './Menu.css'

export const MenuComponent = () => {
   const navigate = useNavigate();
   const {colorTheme,setTheme} = useContext(ThemeContext);
    const onButtonClickLight =()=>{setTheme('light') }

    const onButtonClickBlack =()=>{ setTheme('black')}


    return (
        <div className={colorTheme}  >
        <ul>
        <li onClick={()=>{
            navigate('json')
        }}>Jsonplaceholder</li>
            <li onClick={()=>{
                navigate('dummy')
            }}>Dummyjson</li>
        </ul>
            <button onClick={()=>onButtonClickBlack()}>Dark Mode</button>
            <button onClick={()=>onButtonClickLight()}>Light Mode</button>
        </div>
    );
};
