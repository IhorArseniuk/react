import type {ProductModel} from "../../models/productModel.ts";
import type {FC} from "react";
import IfObject from "./IfObject.tsx";

  type ProductProps={
      product:ProductModel
  }
export const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div className={'product'}>
            {<IfObject product={product}/>}
        </div>
    );
};
