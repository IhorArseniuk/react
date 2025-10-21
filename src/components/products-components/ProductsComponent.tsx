import {useEffect, useState} from "react";
import type {DummyProductType} from "../../models/DummyProductType.ts";
import { getDummyResource} from "../../service/DummyService.ts";
import {ProductComponent} from "./ProductComponent.tsx";



export const ProductsComponent = () => {


 const [products, setProducts]=useState<DummyProductType[]>([])

    useEffect(()=>{
        getDummyResource('products')
             .then(res=>{
                 if(res.products) {
                     setProducts(res.products)
                 }
             })
    },[])
console.log(products)
    return (
        <div className="flex flex-col">
            {products.map((product )=>(<ProductComponent key={product.id}  product={product}/>)) }
        </div>
    );
};
