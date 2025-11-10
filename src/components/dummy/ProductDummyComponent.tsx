import type {ProductDummyType} from "../../models/dummy-models/ProductDummyType.ts";
import {type FC, useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";
import './dummy.css'
type ProductsProps={
    product: ProductDummyType
}
export const ProductDummyComponent:FC<ProductsProps> = ({product}) => {
    const {colorTheme}=useContext(ThemeContext)
    return (
        <ul className={colorTheme}>
            {Object.entries(product).map(([key, value],index)=>{
                if(index<10){
                    return(
                        <li>{key}-{String(value)}</li>
                    )
                }
            })}
        </ul>
    );
};
