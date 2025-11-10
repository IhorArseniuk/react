import {useNavigate} from "react-router";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

export const JsonHomeComponent = () => {
    const navigate = useNavigate()
    const {colorTheme, setTheme}=useContext(ThemeContext)
    return (<>
            <ul className={colorTheme}>
                <li onClick={()=>navigate('users')}>Users</li>
                <li onClick={()=>navigate('products')}>Photos</li>
                <li onClick={()=>navigate('posts')}>Posts</li>
            </ul>
            <button onClick={()=>setTheme('black')}>Dark mode</button>
            <button onClick={()=>setTheme('light')}>Light mode</button>
        </>
    );
};
