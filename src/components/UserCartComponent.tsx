import {useParams} from "react-router";
import { useEffect, useState} from "react";
import type {CartsResponse} from "../models/CartType.ts";
import {getDummyUsers} from "../services/DummyUsersService.tsx";
import {urls} from "../urls/Urls.tsx";
export const UserCartComponent = () => {
    const {userId}=useParams()
    const [cart,setCart]=useState<CartsResponse>()
    useEffect(()=>{
        getDummyUsers(urls.dummyJson.users.getUserCartById(Number(userId)))
            .then(res=>{setCart(res)

            })
    },[userId])
    return (
        <div className={'UserCart'}>

            { cart && Object.entries(cart).map(([key,value],index)=>{
                if(Array.isArray(value)){
                    return(
                        <ul key={index}>{key}
                            {value.map((value,index)=>{

                                 if(typeof value ==='object' && value !== null){
                                    return(
                                        <ul key={index}>
                                            {Object.entries(value).map(([key,value],index)=>{

                                                if(Array.isArray(value) && value!==null){
                                                    return(
                                                        <ul key={index}>{key}
                                                            {value.map((value,index)=>{
                                                                if(typeof value ==='object' && value !== null){
                                                                    return(
                                                                        <ul key={index}>{key}
                                                                        {Object.entries(value).map(([key, value],index)=>{
                                                                            if(key==='thumbnail'){
                                                                                return(
                                                                                    <img src={String(value)} alt={key}/>
                                                                                )
                                                                            }
                                                                            return(<li key={index}>{key}-{String(value)}</li>)})}
                                                                        </ul>)
                                                                }
                                                            })}
                                                        </ul>
                                                    )
                                                }
                                             return   <li key={index}>{key}-{String(value)}</li>
                                            })}
                                        </ul>
                                    )
                                }

                                return <li key={index}>{String(value)}</li>;
                            })}
                        </ul>
                    )
                }

            })}
        </div>
    );
};
