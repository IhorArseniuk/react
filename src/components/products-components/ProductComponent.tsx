import type {DummyProductType} from "../../models/DummyProductType.ts";
import type {FC} from "react";
type ProductProps={
    product: DummyProductType
}

export const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <ul className={'flex flex-col'}>
            {Object.entries(product).map(([key,value],index)=>{
            if(index<7) {
                return (
                <li key={index}>{key}-{String(value)}</li>
            )}
            })}
        </ul>
    );
};
