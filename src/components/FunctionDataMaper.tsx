import {useEffect, useState} from "react";
import type {UserDummyType} from "../models/userDummyType.ts";
import type {PostDummyType} from "../models/postDummyType.ts";
import {functionFetchApi} from "./FunctionFetchApi.tsx";
import {FunctionItemMaper} from "./FunctionItemMaper.tsx";


type FuncProps={
    fetchUrl:string,
    dataArrName?:string,
}
type ItemProps= UserDummyType | PostDummyType


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
