import { StateCreator } from "zustand"
import { getCategories, getRecipe } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"
export type RecipeSliceType={
    categories : Categories
    // searchFilter: SearchFilter
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecepies: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: () => Promise<void>
}


export const createRecipeSlice : StateCreator<RecipeSliceType>= (set)=> ({
    categories : {
        drinks: []
    },
    // searchFilter:{
    //     ingredient:"",
    //     category:""
    // },
    drinks:{
        drinks:[]
    },
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
    selectRecipe: async()=>{
        console.log("select Recipe");
        
    }
})