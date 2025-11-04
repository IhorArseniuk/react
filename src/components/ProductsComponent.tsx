import type {TypeProductsDummy} from "../models/TypeProductsDummy.ts";
import {useFetch} from "../hooks/UseFetch.tsx";
import {ProductComponent} from "./ProductComponent.tsx";

export const ProductsComponent = () => {
    const products = useFetch<TypeProductsDummy>('products')
    return (
        <>{
            products.map((product) => <ProductComponent key={product.id} product={product} />)
        }</>
    );
};
