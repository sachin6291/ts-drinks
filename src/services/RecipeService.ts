import axios from "axios";
import { CategoriesAPISchema, DrinksAPISchema, RecipeAPIResponseSchema } from "../utils/recipe-schema";
import { Drink, SearchFilter } from "../types";

export const getCategories = async()=>{
    const url="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const {data} = await axios(url)
    const result = CategoriesAPISchema.safeParse(data)
    if( result.success){
        return result.data
    }
    
}

export const getRecipe = async(searchFilter: SearchFilter)=>{
    const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPISchema.safeParse(data)
    if(result.success){
        return result.data
    }
        
}

export const getRecipeById = async(id: Drink['idDrink']) =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success){
        return result.data
    }
}