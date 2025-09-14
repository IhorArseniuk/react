import {useEffect, useState} from "react";
import {functionFetchApi} from "./FunctionFetchApi.tsx";
import {FunctionItemMaper} from "./FunctionItemMaper.tsx";

export const FunctionDataMaper = (items,fetchUrl) => {
   const [items,setItems]=useState([])
   useEffect(() => {
 functionFetchApi(fetchUrl)
     .then(response=>{
         setItems(response)
     })
   })
    return (
        <div>
            {items && items.map(item=>{<FunctionItemMaper item={item}/>})}
        </div>
    );
};
