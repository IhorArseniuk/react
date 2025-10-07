import type {FC} from "react";
import type {CarType} from "../../models/CarType.ts";
type CarProps={
    car: CarType
}

export const CarComponent:FC<CarProps> = ({car}) => {
    return (
        <div className={'flex flex-col p-2 border-4'} key={car.id}>
        <ul>
            {Object.entries(car).map(([key,value],index)=>(
                <li  className={'border-2 p-2 border-green-700 bg-lime-400'} key={index}>{key}-{String(value)}</li>
            ))}
        </ul>
        </div>
    );
};
