import type {UserDummyType} from "../../models/usersType/userDummyType.ts";
import type {UserJsonHolType} from "../../models/usersType/userJsonHolType.ts";
import type {PostDummyType} from "../../models/postsType/postDummyType.ts";
import type {PostJsonHolType} from "../../models/postsType/postJsonHolType.ts";
import type {CommentDummyType} from "../../models/commentsType/commentDummyType.ts";
import type {CommentJsonHolType} from "../../models/commentsType/commentJsonHolType.ts";
import type {FC} from "react";
import './item.css'

export type FunctionItemProps={
    item : UserDummyType | UserJsonHolType | PostDummyType | PostJsonHolType | CommentDummyType | CommentJsonHolType
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
                        <ul key={index}>{key}
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


