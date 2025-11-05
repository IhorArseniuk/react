import  axios from "axios";


const axiosInstance= axios.create({
    baseURL:'https://dummyjson.com/',
    headers:{}
})
export const getDummyResource = async <T>(url:string):Promise<T[]>=>{
    const {data}=await axiosInstance.get(url)
    const key = Object.keys(data).find(
        (k) => Array.isArray((data as any)[k])
    );

    if (!key) {
        console.warn("⚠️ Не знайдено масив у відповіді dummyjson:", data);
        return [];
    }
    return data[key] as T[]
}

export const getDummyRes= async <T>(url:string):Promise<T>=>{
    const {data}=await axiosInstance.get<T>(url)
    return data
}
