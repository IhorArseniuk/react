import {useEffect, useState} from "react";
import type {ProductModel} from "../../models/productModel.ts";
import {loadProducts} from "../../services/productApi.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () => {
   const[products, setProducts]=useState<ProductModel[]>([])

    useEffect(()=>{
       loadProducts()
           .then(res=>{
               const{products}=res
              setProducts(products)
           })
    })

    return (
        <div>
            {products.map(product=>(<ProductComponent product={product} key={product.id}/>))}
        </div>
    );
};
