import {createContext} from "react";

type ThemeContextType ={
    colorTheme:string,
    setTheme: (newTheme:string)=>void
}
export const init:ThemeContextType={
    colorTheme: 'light',
    setTheme: (newTheme:string) =>{ console.log(newTheme) }
}
export const ThemeContext =createContext<ThemeContextType>(init)
