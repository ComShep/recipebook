import { useEffect } from "react"
import { getFetchData } from "../api/api";
import { useRecipeBookContext } from "../context/RecipeContext";
import type { RecipesResponce } from "../types/types";
import { transformResponse } from "../components/utils/transformResponse";

export const useRecipes = () => {
	const {recipes, setRecipes, isLoading, setIsLoading} = useRecipeBookContext();

	const loadRecipesData = async () => {
		setIsLoading(true);
		try {
			const data = await getFetchData<RecipesResponce>('recipes');
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