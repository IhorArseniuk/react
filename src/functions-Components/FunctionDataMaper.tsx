import {useEffect, useState} from "react";
import {functionFetchApi} from "./FunctionFetchApi.tsx";
import {FunctionItemMaper} from "./FunctionItemMaper.tsx";


export const FunctionDataMaper = (fetchUrl:string,dataArrName?:string) => {

    const [array,setItems]=useState([])

    useEffect(() => {
 functionFetchApi(fetchUrl)

     .then(response=>{

     if(dataArrName){ const {dataArrName}=response
     setItems(dataArrName)}

     else {
         setItems(response)
     }})

   })

    return (
        <div>
            { array.map(item=><FunctionItemMaper item={item}/>)}
        </div>
    );
};
