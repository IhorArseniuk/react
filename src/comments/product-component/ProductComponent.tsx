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

            <ul>Tags:
            {product.tags.map((tag,index)=>(<li key={index}>{tag}</li>))}
            </ul>

            <ul>
                {Object.entries(product.dimensions).map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <p>{product.warrantyInformation}</p>

            <p>{product.shippingInformation}</p>

            <p>{product.availabilityStatus}</p>

            {
                product.reviews.map((review, index) => (
                    <ul key={index}>
                        {Object.entries(review).map(([key, value],index) => (
                            <li key={index}>
                                <h5>{key}:</h5> {String(value)}
                            </li>
                        ))}
                    </ul>
                ))
            }

            <p>{product.returnPolicy}</p>

            <p>{product.minimumOrderQuantity}</p>

            <img src={product.thumbnail}/>

        </div>
    );
};
