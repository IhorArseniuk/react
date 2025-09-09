import type {UserType} from "../model/UserType.ts";
import type {FC} from "react";

type UserProps= {
    user:UserType
}
export const UserComponent:FC<UserProps> = ({user}) => {
    return (
        <div>
            <h2>{user.id}</h2>
        </div>
    );
};
