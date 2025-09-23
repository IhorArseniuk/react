import {type FC, useEffect, useState} from "react";
import type {UserType} from "../models/UserType.ts";
import {getDummyUsers} from "../services/DummyUsersService.tsx";
import {UserComponent} from "./UserComponent.tsx";

type UsersProps={
    url:string,
    dataArrayName ?:string
}

export const UsersComponent :FC<UsersProps> = ({url,dataArrayName}) => {
    const [users,setUsers]=useState<UserType[]>([])
    useEffect(()=>{
          getDummyUsers(url)
              .then(res=>{
                  if(dataArrayName) {
                      const result= res[dataArrayName]
                      setUsers(result)
                  }})
    },[])
    return (
        <div className='flex flex-wrap gap-10 justify-center'>{
            users.map((user) => (<UserComponent user={user}/>))
        }</div>
    );
};
