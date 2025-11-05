//import type {TypeRecipesDummy} from "../models/TypeRecipesDummy.ts";
//import {useFetch} from "../hooks/UseFetch.tsx";
import {RecipieComponent} from "./RecipieComponent.tsx";
import {useDummyFetch} from "../hooks/UseDummyFetch.tsx";
import type {TypeBaseDummyResponce} from "../models/TypeBaseDummyResponce.ts";

export const RecipiesComponent = () => {
  // const recipes = useFetch<TypeRecipesDummy>('recipes')
   const recipes= useDummyFetch<TypeBaseDummyResponce>('recipes')?.recipes
   return (
        <>

            {recipes && recipes.map((recipe) =><RecipieComponent recipe={recipe}/>)}
        </>
    );
};
