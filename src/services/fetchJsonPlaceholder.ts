import {jsonPlaceUrl} from "../constants/Urls.tsx";
import type {UserType} from "../model/UserType.ts";

async function usersJsonfetch():Promise<UserType[]>{
    return fetch(jsonPlaceUrl.users.allUsers)
        .then(res=>res.json())
}
export{usersJsonfetch}
