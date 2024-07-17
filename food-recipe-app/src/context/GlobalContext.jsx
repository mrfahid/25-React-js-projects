import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context Global variable
const GlobalContext = createContext(null);

// Data State Provider
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  // use Navigate for / pages
  const navigate = useNavigate();

  // API call
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  // Add to Favorite Func
  function handleAddToFavorite(getCurrentItem) {
    let copyFavoritesList = [...favoritesList];
    const index = copyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      copyFavoritesList.push(getCurrentItem);
    } else {
      copyFavoritesList.splice(index, 1); // Remove from favorites if already added
    }

    // Update local storage with updated favorites list
    localStorage.setItem("fav", JSON.stringify(copyFavoritesList));
    setFavoritesList(copyFavoritesList);
  }

  // Load favorites from local storage on app initialization
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("fav"));
    if (storedFavorites) {
      setFavoritesList(storedFavorites);
    }
  }, []);

  console.log(favoritesList, "favoritesList");

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        favoritesList,
        recipeDetailsData,
        setSearchParam,
        setRecipeDetailsData,
        handleSubmit,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Costume Hook
export const useRecipeData = () => {
  return useContext(GlobalContext);
};
