import {useEffect, useState} from "react";
import {getDummyResource} from "../services/DummyService.ts";

export const useFetch = <T,> (url:string)=>{

    const [resource, setResource] = useState<T[]>([]);
    useEffect(()=>{
        getDummyResource<T>(url)
        .then(res => {
            setResource(res)})
            .catch(()=>{setResource([])})
    },[url])
    return resource;
}
