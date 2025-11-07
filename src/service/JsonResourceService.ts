import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
})

export const getJsonResource = async <T>(url:string):Promise<T>=>{
    const {data} = await axiosInstance.get<T>(url)
    return data
}
