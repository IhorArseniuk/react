import {dummyUrl} from "../urls/UrlsDummy.tsx";
import type {UserDummyResType} from "../models/UserDummyResType.ts";

export const getDummyUsers = async (countSkip:string,countLimit:string ):Promise<UserDummyResType> =>{
   const Limit=+countLimit;
    const skip=Limit*(+countSkip)-Limit;
    return await fetch(dummyUrl.users+'?skip='+skip +'&limit='+countLimit)
        .then(res=>res.json())
}
