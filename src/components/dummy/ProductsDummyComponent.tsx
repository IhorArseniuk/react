import {useFetch} from "../../hooks/UseFetch.tsx";
import type {BaseDummyType} from "../../models/dummy-models/BaseDummyType.ts";
import type {ProductDummyType} from "../../models/dummy-models/ProductDummyType.ts";
import {ProductDummyComponent} from "./ProductDummyComponent.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.tsx";

export const ProductsDummyComponent = () => {
    const {setTheme}=useContext(ThemeContext)
    const products = useFetch<BaseDummyType & {products:ProductDummyType[]}>('products','dummy')?.products
    return (
        <>
            {products && products.map((product) =><ProductDummyComponent key={product.id} product={product} />  )}
            <button onClick={()=>setTheme('black')}></button>
            <button onClick={()=>setTheme('light')}></button>
        </>
    );
};
