import { useEffect } from "react"
import { getRecipesList } from "../api/api";
import { useRecipeBookContext } from "../context/RecipeContext";

export const useRecipes = () => {
	const {recipes, setRecipes, isLoading, setIsLoading} = useRecipeBookContext();

	const loadRecipesData = async () => {
		setIsLoading(true);
		try {
			const data = await getRecipesList();
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