import type {ProductModel} from "../../models/productModel.ts";
import type {FC} from "react";

  type ProductProps={
      product:ProductModel
  }
export const ProductComponent:FC<ProductProps> = ({product}) => {
    return (
        <div className={'product'}>
            <h1>{product.id}</h1>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.brand}</p>
            <p>{product.sku}</p>
            <p>{product.weight}</p>
            <ul>
            {product.tags.map((tag,index)=>(<li key={index}>{tag}</li>))}
            </ul>
            <div>
            <p>{product.dimensions.depth}</p>
                <p>{product.dimensions.height}</p>
                <p>{product.dimensions.width}</p>
            </div>
            <p>{product.warrantyInformation}</p>
            <p>{product.shippingInformation}</p>
            <p>{product.availabilityStatus}</p>

            <p>{product.returnPolicy}</p>
            <p>{product.minimumOrderQuantity}</p>

            <img src={product.thumbnail}/>
        </div>
    );
};
