import type {TypeRecipesDummy} from "../models/TypeRecipiesDummy.ts";
import {useFetch} from "../hooks/UseFetch.tsx";
import {RecipieComponent} from "./RecipieComponent.tsx";

export const RecipiesComponent = () => {
   const recipes = useFetch<TypeRecipesDummy>('recipes')
    return (
        <>
            {recipes.map((recipe) =><RecipieComponent recipe={recipe}/>)}
        </>
    );
};
