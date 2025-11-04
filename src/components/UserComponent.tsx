import type {FC} from "react";
import type {TypeUserDummy} from "../models/TypeUserDummy.ts";
type UserProps={
    user:TypeUserDummy
}
export const UserComponent:FC<UserProps> = ({user}) => {
    return (
        <>
        <p>{user.firstName}</p>
            <p>{user.age}</p>
        </>
    );
};
