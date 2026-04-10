import { useEffect } from "react"
import { getFetchData } from "../api/api";
import { useRecipeBookContext } from "../context/RecipeContext";
import type { RecipesSectionResponse } from "../types/types";
import { transformResponse } from "../components/utils/transformResponse";

export const useRecipes = () => {
	const { recipes, setRecipes, isLoading, setIsLoading } = useRecipeBookContext();

	const loadRecipesData = async () => {
		setIsLoading(true);

		if (recipes !== null) {
			setIsLoading(false)
			return;
		}

		try {
			const data = await getFetchData<RecipesSectionResponse>('recipes');
			const arrayOfRecipes = transformResponse(data);
			setRecipes(arrayOfRecipes)
		} catch (err) {
			console.log(err)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		loadRecipesData();
	}, [])

	return {
		recipes,
		isLoading
	}
}