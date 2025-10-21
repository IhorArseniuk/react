import type {DummyProductType} from "./DummyProductType.ts";
import type {DummyCartsType} from "./DummyCartsType.ts";
import type {DummyUsersType} from "./DummyUsersType.ts";
import type {DummyPostsType} from "./DummyPostsType.ts";
import type {DummyCommentsType} from "./DummyCommentsType.ts";
import type {DummyTodosType} from "./DummyTodosType.ts";
import type {DummyQuotesType} from "./DummyQuotesType.ts";

export type DummyListResponse = {
      products?:DummyProductType[]
      carts?:DummyCartsType[]
      users?:DummyUsersType[]
      posts?:DummyPostsType[]
      comments?:DummyCommentsType[]
      todos?:DummyTodosType[]
      quotes?:DummyQuotesType[]
    total: number
    skip: number
    limit: number
}
