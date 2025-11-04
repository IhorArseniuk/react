import type {TypeProductsDummy} from "../models/TypeProductsDummy.ts";
import type {FC} from "react";


type ProductProps={
    product:TypeProductsDummy
}
export const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <ul>{Object.entries(product).map(([key, value],index)=>{
            if(index<10){
            return(<li key={index}>{key}-{String(value)}</li>)}
        })}
        </ul>
    );
};
