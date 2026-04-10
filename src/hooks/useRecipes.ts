import { useEffect } from "react"
import { getFetchData } from "../api/api";
import { useRecipeBookContext } from "../context/RecipeContext";
import type { RecipesResponce } from "../types/types";

export const useRecipes = () => {
	const {recipes, setRecipes, isLoading, setIsLoading} = useRecipeBookContext();

	const loadRecipesData = async () => {
		setIsLoading(true);
		try {
			
			const data = await getFetchData<RecipesResponce>('recipes');
			const arrayOfData = Object.entries(data);
			const arrayOfRecipes = arrayOfData.map(([id, recipe]) => ({
				id: id,
				...recipe
			}))
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