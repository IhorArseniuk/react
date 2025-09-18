import type {FC} from "react";
import type {UserDummyType} from "../models/userDummyType.ts";
import type {PostDummyType} from "../models/postDummyType.ts";

export type FunctionItemProps={
    item : UserDummyType|PostDummyType
}

export const FunctionItemMaper:FC<FunctionItemProps> = ({item}) => {
    return (
        <div className={'itemContainer'}>

            {Object.entries(item).map(([key, value],index) => {

                if(typeof value === 'object' &&  value !== null){

                    return (
                        <ul key={index}>{key}

                            {Object.entries(value).map(([ItemKey, ItemValue],index) => {

                                if(typeof ItemValue==='object'&& ItemValue!==null){
                                    return (
                                        <ul key={index}>{ItemKey}

                                            { Object.entries(ItemValue).map(([iTKey,iTValue],index)=>{

                                                if(typeof iTValue==='object'&& iTValue!==null){
                                                    return(
                                                        <ul key={index}>{iTKey}
                                                            {Object.entries(iTValue).map(([itmKey,itmValue],index)=>(
                                                                <li key={index}>{itmKey}-{String(itmValue)}</li>
                                                            ))}
                                                        </ul>
                                                    )
                                                }

                                                return( <li key={index}>{iTKey}-{String(iTValue)}</li>)

                                            })}
                                        </ul>
                                    )
                                }

                                return( <li key={index}>{ItemKey}-{String(ItemValue)}</li>)



                            })}

                        </ul>
                    )
                }

                if(Array.isArray(value) && value !== null){

                    return (
                        <ul key={index}>{value}
                            {  value.map(([key, values],index)=>(
                                <li  key={index}>{key}-{String(values)}</li>))}
                        </ul>
                    )
                }

                return  <p key={index}>{key}-{String(value)}</p>
            })

            }
        </div>
    )

}
