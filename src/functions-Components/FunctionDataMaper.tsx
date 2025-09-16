import {useEffect, useState} from "react";
import {functionFetchApi} from "./FunctionFetchApi.tsx";
import {FunctionItemMaper} from "./FunctionItemMaper.tsx";
type FuncProps={
    fetchUrl:string,
    dataArrName?:string,
}

export const FunctionDataMaper = ({fetchUrl,dataArrName}:FuncProps) => {

    const [array,setItems]=useState([])

    useEffect(() => {
 functionFetchApi(fetchUrl)

     .then(response=>{

     if(dataArrName){ const {dataArrName}=response
     setItems(dataArrName)}

     else {
         setItems(response)
     }})

   },[])

    return (
        <div>
            { array.map(item=><FunctionItemMaper item={item}/>)}
        </div>
    );
};
