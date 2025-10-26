import type {DummyCartsType} from "../../models/DummyCartsType.ts";
import type {FC} from "react";

type CartProp = {
    cart : DummyCartsType
}
export const CartComponent:FC<CartProp> = ({cart}) => {

    return (
        <ul>
            {Object.entries(cart).map(([key,value],index)=>{

                  if(Array.isArray(value)){
                      return(
                          <ul>
                              { value.map((Item)=>{

                                  if (typeof Item ==='object' && Item!==null) {
                                      return (<li>
                                      {Object.entries(Item).map(([obKey, obVal], index) => {
                                              return (
                                                  <li key={index}>{obKey}-{String(obVal)}</li>
                                              )
                                          })}
                                 </li> )
                                      }})}
                         </ul>
                      )}
                return(
                    <li key={index}>{key}-{String(value)}</li>
                )
            })}
        </ul>
    );
};
