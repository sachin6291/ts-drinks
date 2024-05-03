import { StateCreator } from "zustand"
import { getCategories, getRecipe, getRecipeById } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { FavoritesSliceType } from "./favoriteSlice"
export type RecipeSliceType={
    categories : Categories
    // searchFilter: SearchFilter
    selectedRecipe : Recipe
    drinks: Drinks
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecepies: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id : Drink['idDrink']) => Promise<void>
    closeModal: () => void
}


export const createRecipeSlice : StateCreator<RecipeSliceType & FavoritesSliceType, [], [], RecipeSliceType>= (set)=> ({
    categories : {
        drinks: []
    },

    selectedRecipe :{} as Recipe,

    drinks:{
        drinks:[]
    },
    modal : false, 

    fetchCategories: async()=>{
        const categories= await getCategories()
        set({
            categories
        })
        
    },

    searchRecepies: async(searchFilter)=>{
       const  drinks   = await getRecipe(searchFilter)
       set({drinks});
        
    },

    selectRecipe: async( id )=>{
       const selectedRecipe =  await getRecipeById(id)
        set({
            selectedRecipe,
            modal : true
        })
        
    },
    closeModal: () =>{
        set({
            modal : false,
            selectedRecipe : {} as Recipe
        })
    }
})