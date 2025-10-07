import  axios from "axios";
import type {CarType} from "../models/CarType.ts";


export const axiosInstance= axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1/',
    headers:{}
});

export const getCars = async ():Promise<CarType[]> =>{
    const{data}=await axiosInstance.get('/cars')
    return data
}
