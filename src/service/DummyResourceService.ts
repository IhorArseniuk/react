import  axios from "axios";

const axiosInstance= axios.create({
    baseURL:'https://dummyjson.com/',
    headers:{}
})

const axiosI= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
})

export const  getDummyResource=async <T>(url:string, dataHolder:string):Promise<T>=>{
    if(dataHolder==='dummy') {
        const {data} = await axiosInstance.get<T>(url)
        return data
    }
    if(dataHolder==='json'){
const {data}=await axiosI.get<T>(url)
        return data
    }
    else return [] as T
}
