import  axios from "axios";
import type {DummyAuthUserRes} from "../models/DummyAuthUserRes.ts";
import type {DummyListResponse} from "../models/DummyListResponce.ts";




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


export const getDummyResource = async (resource: string): Promise<DummyListResponse> => {
    const { data } = await axiosInstance.get<DummyListResponse>(resource)
return data
}

