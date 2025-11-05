import {useEffect, useState} from "react";
import {getDummyRes} from "../services/DummyService.ts";

export const useDummyFetch = <T,>(url:string) => {
    const [res, setRes]=useState<T>()
    useEffect(()=>{
        getDummyRes<T>(url)
            .then(res=>{
                setRes(res)
            })
    },[url])
    return res
};
