import {useEffect, useState} from "react";
import type {CarType} from "../../models/CarType.ts";
import {getCars} from "../../service/CarsApi.tsx";
import {CarComponent} from "./CarComponent.tsx";

export const CarsComponent = () => {

    const [cars, setCars]=useState<CarType[]>([])

    useEffect(()=>{
      getCars()
          .then(res=>{setCars(res)})
},[])

    return (
        <div className={' grid grid-cols-2 gap-2'}>
            {cars.map((car,index)=><CarComponent key={index} car={car} />)}
        </div>
    );
};
