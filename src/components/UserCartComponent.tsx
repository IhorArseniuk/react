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
        <div className='flex justify-center items-center w-full'>

            { cart && Object.entries(cart).map(([key,value],index)=>{
                if(Array.isArray(value)){
                    return(
                        <ul className='flex  flex-col bg-gray-400 border-2 border-pink-100 p-4' key={index}>{key}
                            {value.map((value,index)=>{

                                 if(typeof value ==='object' && value !== null){
                                    return(
                                        <ul className='flex flex-col bg-lime-400 border-4 border-amber-950 p-5' key={index}>
                                            {Object.entries(value).map(([key,value],index)=>{

                                                if(Array.isArray(value) && value!==null){
                                                    return(
                                                        <ul className='flex flex-col border-3 bg-sky-400 border-5 border-fuchsia-500 p-4' key={index}>{key}
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
