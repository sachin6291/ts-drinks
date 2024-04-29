import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProp = {
    drink: Drink
}
const DrinkCard = ({drink}:DrinkCardProp) => {

    const {selectRecipe}= useAppStore()
    return (
        <div className="border shadow-lg">
            <div className=" overflow-hidden">
                <img src={drink.strDrinkThumb} alt={`${drink.strDrink} image`} 
                className="hover:scale-125 transition-transform hover:rotate-2"/>
            </div>
            <div className="p-5">
                <h2>{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                    onClick={()=> selectRecipe(drink.idDrink)}
                >Recipe</button>
            </div>
        </div>
    )
}

export default DrinkCard