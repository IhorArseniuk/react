import type {TypeRecipesDummy} from "../models/TypeRecipesDummy.ts";
import type {FC} from "react";

type RecipeProps={
    recipe: TypeRecipesDummy
}
export const RecipieComponent:FC<RecipeProps> = ({recipe}) => {
    return (
        <ul>{Object.entries(recipe).map(([key,value], index )=>{
            if(index<1){
                return(<li key={index}>{key}-{String(value)}</li>)
            }
        })}</ul>
    );
};
