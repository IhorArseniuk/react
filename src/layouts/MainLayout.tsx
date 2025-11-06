import {MenuComponent} from "../components/MenuComponent.tsx";
import {ThemeContext} from "../contexts/ThemeContext.tsx";
import {useState} from "react";
import {DummyHomePage} from "../pages/dummy/DummyHomePage.tsx";
import {JsonHomePage} from "../pages/json/JsonHomePage.tsx";


export const MainLayout = () => {
    const [theme, setThem]=useState<string>('light')
    return (
        <>

            <ThemeContext  value={{
                colorTheme:theme,
                setTheme:(newTheme:string)=>{
                  setThem(newTheme)
            }
            }}>
                <DummyHomePage/>
                <MenuComponent/>
                <JsonHomePage/>
            </ThemeContext>
        </>
    );
};
