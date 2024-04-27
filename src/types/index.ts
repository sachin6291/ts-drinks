import { z } from "zod"
import { CategoriesAPISchema, DrinkAPISchema, DrinksAPISchema, SearchFilterSchema } from "../utils/recipe-schema"

export type Categories = z.infer<typeof CategoriesAPISchema>
export type SearchFilter = z.infer< typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPISchema>
export type Drink = z.infer<typeof DrinkAPISchema>