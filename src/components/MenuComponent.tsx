import {Outlet, useNavigate} from "react-router";
import { useState} from "react";
import {ThemeContext} from "../contexts/ThemeContext.tsx";

export const MenuComponent = () => {
    const [theme, setThem]=useState<string>('light')

   const navigate = useNavigate();
    return (
        <>
        <ThemeContext.Provider  value={{
            colorTheme:theme,
            setTheme:(newTheme:string)=>{
                setThem(newTheme)
            }
        }}>
            <div className={theme}>
                <ul>
                    <li onClick={()=>{
                        navigate('json')
                    }}>Jsonplaceholder</li>
                    <li onClick={()=>{
                        navigate('dummy')
                    }}>Dummyjson</li>
                </ul>

            </div>
            <Outlet/>
        </ThemeContext.Provider>
        </>
    );
};
