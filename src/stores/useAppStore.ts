import { create } from "zustand"
import { RecipeSliceType, createRecipeSlice } from "./recipeSlice"

export const useAppStore = create<RecipeSliceType> ((...a)=>({
    ...createRecipeSlice(...a)
}))