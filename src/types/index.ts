import { z } from "zod"
import { CategoriesAPISchema } from "../utils/recipe-schema"

export type Categories= z.infer<typeof CategoriesAPISchema>