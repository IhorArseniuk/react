import type {ProductModel} from "../../models/productModel.ts";
import type {FC} from "react";

  type ProductProps={
      product:ProductModel
  }
export const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div className={'product'}>

        </div>
    );
};
