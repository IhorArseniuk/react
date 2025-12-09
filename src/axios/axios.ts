import  axios from "axios";
import type {UserType} from "../models/jsonPLHold/userType.ts";

const axiosInstence= axios.create({
     baseURL:import.meta.env.VITE_API_JSONPLACEHILDER
 })

export const loadJsonUsers = async () :Promise<UserType[]> =>{
  const {data} = await axiosInstence.get<UserType[]>('users')
    return data
}
