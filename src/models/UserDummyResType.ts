import type {UserType} from "./UserType.ts";

export type UserDummyResType = {
    users: UserType[],
    total:number,
    skip: number,
    limit:number
}
