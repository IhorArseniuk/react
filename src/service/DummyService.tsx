
import type {UserDummyResType} from "../models/UserDummyResType.ts";


const baseDummuUrl=import.meta.env.VITE_API_DUMMYJSON

       export const  getDummyUsers= async (count:string): Promise<UserDummyResType> =>{
  return   await fetch(baseDummuUrl+'users?skip='+count)
        .then(res=>res.json())
       }

