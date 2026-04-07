import { useEffect, useState } from "react"
import { getRecipesList } from "../api/api";
import type { Resipe } from "../types/types";

export const useRecipeManager = () => {
	const [recipes, setRecipes] = useState<Array<Resipe> | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

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