import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { RecipeSliceType, createRecipeSlice } from "./recipeSlice"

export type FavoritesSliceType={
    favorites : Recipe[]
    handleClickFavorite: (recipe: Recipe)=> void
    favoriteExists: (id: Recipe['idDrink'])=> boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipeSliceType, [], [], FavoritesSliceType>= (set, get, api)=>({
    favorites : [],
    handleClickFavorite: (recipe)=>{
        if(get().favoriteExists(recipe.idDrink)){
            set((state)=>({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
        }else{
            console.log('added to favorite')
            set((state)=>({
                favorites:[...state.favorites, recipe]
            }))
        }
        setTimeout(()=>{
        createRecipeSlice(set, get, api).closeModal()
        }, 200)
        localStorage.setItem('favorite', JSON.stringify(get().favorites))
    },
    favoriteExists : (id)=>{
        return get().favorites.some(favorite => favorite.idDrink === id)
    }, 
    loadFromStorage:()=>{
        const storedFavorites = localStorage.getItem('favorite')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})