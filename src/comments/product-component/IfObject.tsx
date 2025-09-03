import type {ProductModel} from "../../models/productModel.ts";
type ProductProps={
    product: ProductModel
}
function IfObject({product}:ProductProps){
    return(
        <>
            {  Object.entries(product).map(([key,value],index) => {
        if(Array.isArray(value)){
            return (
                <ul key={index}>
                    {value.map((item, i) => {
                        if (typeof item === "object" && item !== null) {
                            return Object.entries(item).map(([itemKey, itemValue], j) => (
                                <li key={ j}>
                                    {itemKey}: {String(itemValue)}
                                </li>
                            ));
                        }
                        return <li key={i}>{String(item)}</li>;
                    })}
                </ul>
            );
        }
        if(typeof value==='object'){
            return (
                <ul key={index}>
                {Object.entries(value).map(([item,value], index)=>(
                    <li key={index}>{item}:{String(value)}</li>
                ))}
            </ul>)
        }
        if(key==='thumbnail'){
          return (
              <img src={String(value)} key={index}/>
          )
        }
        return(
             <p key={index}>{key}:{String(value)}</p>
        )
    })}
</>)}
export default IfObject
