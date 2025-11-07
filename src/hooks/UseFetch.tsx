import {useEffect, useState} from "react";
import {getDummyResource} from "../service/DummyResourceService.ts";

export const useFetch = <T,>(url:string,dataHolder:string) => {

    const [resource, setRes]=useState<T>()

    useEffect(()=>{
        getDummyResource<T>(url, dataHolder)
            .then(res=>{
                setRes(res)
            })
    },[url])
return resource
};
