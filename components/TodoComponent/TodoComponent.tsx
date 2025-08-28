import type {UserType} from "../../models/userType";
import type {FC} from "react";

type TodoUserType={
    user: UserType,
    userInfo ?: (user:UserType)=>void
}
export const TodoComponent:FC<TodoUserType> = ({user,userInfo}) => {
    return (
        <div id={'user'} onClick={()=> userInfo ? userInfo(user) :undefined}>{user.title}</div>
    )
};
