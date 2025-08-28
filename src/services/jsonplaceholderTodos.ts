import type {UserType} from "../../models/userType.ts";


const todosUrl= import.meta.env.VITE_APP_JSPTODO;
    const getUsers= async ():Promise<UserType[]>=>{
        return await fetch(todosUrl)
       .then(res=>res.json())
    }
    export {getUsers};
