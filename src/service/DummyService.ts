import  axios from "axios";
import type {DummyAuthUserRes} from "../models/DummyAuthUserRes.ts";
import type {DummyProductType} from "../models/DummyProductType.ts";
import type {DummyCartsType} from "../models/DummyCartsType.ts";
import type {DummyUsersType} from "../models/DummyUsersType.ts";



const axiosInstance=axios.create({
    baseURL:"https://dummyjson.com/",
    headers:{},
})

export const DummyAuth=async (username:string,password:string,expiresInMins:number)=>{
    const {data:DummyAuthUserRes}= await axiosInstance.post<DummyAuthUserRes>('auth/login',{ username, password, expiresInMins})
  localStorage.setItem('userToken',JSON.stringify(DummyAuthUserRes))
    console.log(DummyAuthUserRes)
    return DummyAuthUserRes
}

export const getDummyProducts= async():Promise<DummyProductType[]>=>{
    const {data:products}=await axiosInstance.get<DummyProductType[]>('products')
    return products
}

export const getDummyCartsType= async():Promise<DummyCartsType[]>=>{
const {data:carts}=await axiosInstance.get<DummyCartsType[]>('carts')
    return carts
}

export const getDummyUsersType= async():Promise<DummyUsersType[]>=>{
const{data:users}=await axiosInstance.get<DummyUsersType[]>('users');
return users
}

export const getDummyResourse= async <T>(resourse:string):Promise<T[]>=>{

    const {data}=await axiosInstance.get<T[]>(resourse)
    return data
}

