import type {UserType} from "./UserType.ts";

export type DummyUserType = {
    users:UserType[],
    total: number,
    skip: number,
    limit: number
}
