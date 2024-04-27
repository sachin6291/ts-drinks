import { ChangeEvent, FormEvent, useState } from "react"
import { useAppStore } from "../stores/useAppStore"
import {v4 as uuid} from "uuid"
import { SearchFilter } from "../types"

const SearchDrink = () => {

    const [searchFilter, setSearchFilter] = useState<SearchFilter>({
        ingredient:"",
        category:""
    })
    const [error, setError]= useState("")
    

    const {categories: {drinks}, searchRecepies} = useAppStore()

    const handleChange =(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
        setSearchFilter({
            ...searchFilter,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit= (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(searchFilter).includes("")){
            setError("")
            return
        }
        searchRecepies(searchFilter)
    }

    
  return (
    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-24 p-10 rounded-lg shadow-lg space-y-6"
        onSubmit={handleSubmit}
    >
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient" 
                            className="block text-white uppercase font-bold text-lg"
                        >Name or Ingredient</label>

                        <input 
                            type="text" 
                            id="ingredient" 
                            name="ingredient"
                            className="p-3 w-full rounded-lg focus:outline-none"
                            placeholder="Name or Ingredient e.g. Vodka, Tequila, Coffee"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-4">
                        <label 
                            htmlFor="category" 
                            className="block text-white uppercase font-bold text-lg"
                        >Type of Drink</label>

                        <select  
                            id="category" 
                            name="category"
                            className="p-3 w-full rounded-lg focus:outline-none"
                            onChange={handleChange}
                            value={searchFilter.category}
                        >
                            <option value="">--Select--</option>
                            {drinks.map(category=>(
                                <option value={category.strCategory} key={uuid()}>{category.strCategory}</option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="submit"
                        value="Search Recipe"
                        className="cursor-pointer bg-orange-700 hover:bg-orange-800 p-2 rounded-lg uppercase text-white font-semibold w-full"
                    />
                </form>
  )
}

export default SearchDrink