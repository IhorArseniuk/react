import {useEffect, useState} from "react";
import {functionFetchApi} from "../FunctionFetchApi.tsx";
import {FunctionItemMaper} from "../function-for-tem/FunctionItemMaper.tsx";
import type {UserDummyType} from "../../models/usersType/userDummyType.ts";
import type {UserJsonHolType} from "../../models/usersType/userJsonHolType.ts";
import type {PostDummyType} from "../../models/postsType/postDummyType.ts";
import type {PostJsonHolType} from "../../models/postsType/postJsonHolType.ts";
import type {CommentDummyType} from "../../models/commentsType/commentDummyType.ts";
import type {CommentJsonHolType} from "../../models/commentsType/commentJsonHolType.ts";
import './dataMaper.css'

type FuncProps={
    fetchUrl:string,
    dataArrName?:string,
}
type ItemProps= UserDummyType|UserJsonHolType|PostDummyType|PostJsonHolType| CommentDummyType|CommentJsonHolType


export const FunctionDataMaper = ({fetchUrl,dataArrName}:FuncProps) => {

    const [array,setItems]=useState<ItemProps[]>([])

    useEffect(() => {
 functionFetchApi(fetchUrl)

     .then(response=>{

     if(dataArrName){ const arr=response [dataArrName]
     setItems(arr)}

     else {
         setItems(response)
     }})

   },[])

    return (
        <div className={'itemsContainer'}>
            { array.map((item,index)=><FunctionItemMaper key={index} item={item}/>)}
        </div>
    );
};
