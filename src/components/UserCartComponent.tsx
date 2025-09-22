import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {CartType} from "../models/CartType.ts";
import {getDummyUsers} from "../services/DummyUsersService.tsx";
import {urls} from "../urls/Urls.tsx";

export const UserCartComponent = () => {
    const {userId}=useParams()
    const {cart,setCart}=useState<CartType>()
    useEffect(()=>{
        getDummyUsers(urls.dummyJson.users.getUserCartById(Number(userId)))
            .then(res=>setCart(res))
    },[userId])
    return (
        <></>
    );
};
