import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { RecipeSliceType, createRecipeSlice } from "./recipeSlice"
import { FavoritesSliceType, createFavoritesSlice } from "./favoriteSlice"

export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(devtools((...a)=>({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a)
})))