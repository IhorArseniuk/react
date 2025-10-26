import {useEffect, useState} from "react";
import type {DummyCartsType} from "../../models/DummyCartsType.ts";
import {DummyRefresh, getDummyResource} from "../../service/DummyService.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
const [carts, setCarts]=useState<DummyCartsType[]>([])
    useEffect(()=>{
        getDummyResource('carts')
            .then(res=>{
                if(res.carts){
                    setCarts(res.carts)
                }
            })
            .catch(errors =>{
                console.log(errors)
                DummyRefresh()
                    .then(()=>{
                        getDummyResource('carts')
                            .then(res=>{
                                if(res.carts){
                                    setCarts(res.carts)
                                }
                            })
                    })
            })
    },[])
    return (
        <div>
            <b>Carts</b>
            {carts.map((cart)=><CartComponent key={cart.id} cart={cart}/>)}
        </div>
    );
};
