import type {ProductDummyType} from "../models/productModel.ts";

const endpointProducts=import.meta.env.VITE_API_DUMMYJSON+'/products'

async function loadProducts():Promise<ProductDummyType>{
    const products:ProductDummyType=await fetch(endpointProducts)
        .then(res=>res.json())
    return products;
}
export {loadProducts};
