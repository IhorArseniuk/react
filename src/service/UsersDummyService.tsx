import {dummyUrl} from "../urls/UrlsDummy.tsx";
import type {UserDummyResType} from "../models/UserDummyResType.ts";

export const getDummyUsers = async (countSkip:string,countLimit:string ):Promise<UserDummyResType> =>{
    return await fetch(dummyUrl.users+'?skip='+countSkip +'&limit='+countLimit)
        .then(res=>res.json())
}
