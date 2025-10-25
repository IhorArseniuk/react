import  axios from "axios";
import type {DummyAuthUserRes} from "../models/DummyAuthUserRes.ts";
import type {DummyListResponse} from "../models/DummyListResponce.ts";
import type {DummyRefreshType} from "../models/DummyRefresh.ts";




const axiosInstance=axios.create({
    baseURL:"https://dummyjson.com/auth/",
    headers:{},
})

export const DummyAuth=async (username:string,password:string,expiresInMins:number)=>{
    const {data:DummyAuthUserRes}= await axiosInstance.post<DummyAuthUserRes>('login',{ username, password, expiresInMins})
  localStorage.setItem('userToken',JSON.stringify(DummyAuthUserRes))
    console.log(DummyAuthUserRes)
    return DummyAuthUserRes
}


export const getDummyResource = async (resource: string): Promise<DummyListResponse> => {
    const { data } = await axiosInstance.get<DummyListResponse>(resource)
return data
}

export const reformerLocalStorage =<T>(key:string)=>{
    const object = localStorage.getItem(key) || ''
    if(!object) {
    return { } as T
    }
        const parse = JSON.parse(object)
        return parse as T
}
axiosInstance.interceptors.request.use((requestObject)=>{
    if(requestObject.method?.toUpperCase()==='GET'){requestObject.headers.Authorization=`Bearer ${reformerLocalStorage<DummyAuthUserRes>('userToken').accessToken}`}
    return requestObject
})

export const DummyRefresh  = async ()=>{
    const userWitchToken=reformerLocalStorage<DummyAuthUserRes>('userToken')
    const {data:{refreshToken,accessToken}}= await axiosInstance.post<DummyRefreshType>('refresh',{refreshToken:userWitchToken.refreshToken,expiresInMins:1})
    userWitchToken.accessToken=accessToken
    userWitchToken.refreshToken=refreshToken

    localStorage.setItem('userToken',JSON.stringify(userWitchToken))
}
