import type {TypeRecipesDummy} from "./TypeRecipesDummy.ts";


export type TypeBaseDummyResponce ={
    recipes:TypeRecipesDummy[],
    skip:number,
    total:number,
    limit:number,
}
