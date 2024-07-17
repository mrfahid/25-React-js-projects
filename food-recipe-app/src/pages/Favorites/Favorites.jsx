import { RecipeItem } from "../../components"
import { useRecipeData } from "../../context/GlobalContext"


const Favorites = () => {

  const { favoritesList } = useRecipeData()


  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} key={item}/>)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  )
}

export default Favorites