import  axios from "axios";
import type {CarPostType, CarType} from "../models/CarType.ts";


export const axiosInstance= axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1/',
    headers:{}
});

export const getCars = async ():Promise<CarType[]> =>{
    const{data}=await axiosInstance.get<CarType[]>('/cars')
    return data
}
export const postCar= async (car:CarPostType):Promise<CarPostType>=>{
    const{data}=await axiosInstance.post<CarPostType>('/cars',car)

    return data
}
