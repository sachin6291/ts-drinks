import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

const IndexPage = () => {

  const drinks = useAppStore((state)=>state.drinks)

  const hasDrinks = useMemo(()=> drinks.drinks.length, [drinks]) 

  
  return (
    <>
        <h1 className="text-4xl font-bold">Recipes</h1>
        {hasDrinks ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {drinks.drinks.map((drink)=>(
              <DrinkCard
                key={drink.idDrink}
                drink= {drink}
              />
            ))}
          </div>
        ) : (
          <p className="my-10 text-center text-2xl">
            There are no results, use the form to search for Recipes
          </p>
        )

        }
    </>
  )
}

export default IndexPage