import { useEffect } from "react"
import { getFetchData } from "../api/api"
import { transformResponse } from "../components/utils/transformResponse";
import type { CookingTipsResponse } from "../types/types";
import { useRecipeBookContext } from "../context/RecipeContext";

export const useCookingTips = () => {
	const { cookingTips, setCookingTips, isLoadingCookingTips, setIsLoadingCookingTips } = useRecipeBookContext();

	const loadCookingTipsData = async () => {
		setIsLoadingCookingTips(true);

		if (cookingTips !== null) {
			setIsLoadingCookingTips(false);
			return;
		}

		try {
			const data = await getFetchData<CookingTipsResponse>('cooking_tips');
			setCookingTips({
				mastering: transformResponse(data.mastering),
				nourishing: transformResponse(data.nourishing),
				tips_and_tricks: transformResponse(data.tips_and_tricks)
			})
		} catch (err) {
			console.log(err)
		} finally {
			setIsLoadingCookingTips(false);
		}
	}

	useEffect(() => {
		loadCookingTipsData()
	}, [])

	return {
		cookingTips,
		isLoadingCookingTips
	}
}