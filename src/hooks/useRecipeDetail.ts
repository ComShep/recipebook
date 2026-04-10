import { useEffect } from "react";
import { useRecipeBookContext } from "../context/RecipeContext"
import { getRecipeDetail } from "../api/api";
import type { RecipeDetailResponse } from "../types/types";

export const useRecipeDetail = (id: string | undefined) => {
	const {recipeDetail, setRecipeDetail, isLoadingDetail, setIsLoadingDetail} = useRecipeBookContext();

	const loadRecipeDetailData = async () => {
		setIsLoadingDetail(true);

		if (id === undefined) {
			return;
		}
		try {
			const data = await getRecipeDetail<RecipeDetailResponse>(id);
			const recipe = {
				id: id,
				...data
			}
			setRecipeDetail(recipe)
		} catch (err) {
			console.log(err)
		} finally {
			setIsLoadingDetail(false)
		}
	}

	useEffect(() => {
		loadRecipeDetailData();
	}, []);

	return {
		recipeDetail,
		isLoadingDetail
	}
}