import {type FC} from "react";
import type {CarType} from "../../models/CarType.ts";
import {deleteCar} from "../../service/CarsApi.tsx";

type CarProps={

    car: CarType
}

export const CarComponent:FC<CarProps> = ({car}) => {
    const onButtonClick = async  (id:number)=>{return  await deleteCar(id)
    }

    return (
        <div className={'flex flex-col p-2 border-4'} key={car.id}>
            <ul>
                {Object.entries(car).map(([key, value], index) => (
                    <li className={'border-2 p-2 border-green-700 bg-lime-400'} key={index}>{key}-{String(value)}</li>
                ))}
                <button  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>onButtonClick(car.id)}>Delete</button>
            </ul>
        </div>
    );

};
