import { useEffect } from "react";
import { getMain } from "../api/api";
import { useRecipeBookContext } from "../context/RecipeContext";
import type { Recipe, RecipesResponce } from "../types/types";


const transformResponse = (data: RecipesResponce): Recipe[] => {
  return Object.entries(data).map(([id, recipe]) => ({
    id,
    ...recipe
  }));
};

export const useMain = () => {
	const { main, setMain, isLoadingMain, setIsloadingMain } = useRecipeBookContext();

	const loadMainData = async () => {
		setIsloadingMain(true);

		try {
			const data = await getMain();
			const dataOfFavorite = transformResponse(data.favorite);
			const dataOfRecipes = transformResponse(data.recipes);
			setMain({
				favorite: dataOfFavorite,
				recipes: dataOfRecipes
			})
		} catch (err) {
			console.log(err)
		} finally {
			setIsloadingMain(false)
		}
	}

	useEffect(() => {
		loadMainData();
	}, [])

	return {
		main,
		isLoadingMain
	}
}