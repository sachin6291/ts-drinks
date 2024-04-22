import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { RecipeSliceType, createRecipeSlice } from "./recipeSlice"

export const useAppStore = create<RecipeSliceType>()(devtools((...a)=>({
    ...createRecipeSlice(...a)
})))