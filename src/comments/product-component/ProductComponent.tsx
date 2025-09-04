import type {ProductModel} from "../../models/productModel.ts";
import type {FC} from "react";
import IfObject from "../components-functions/IfObject.tsx";
import './css/product.css'
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
