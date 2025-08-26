import type {UserType} from "../../models/userType";
import type {FC} from "react";

type TodoUserType={
    user: UserType,
    userInfo : (user:UserType)=>void
}
export const TodoComponent:FC<TodoUserType> = ({user,userInfo}) => {
    return (
        <div onClick={()=>userInfo(user)}>{user.title}</div>
    )
};
