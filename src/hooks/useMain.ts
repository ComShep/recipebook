import { useEffect } from "react";
import { getFetchData} from "../api/api";
import { useRecipeBookContext } from "../context/RecipeContext";
import type { MainResponse } from "../types/types";
import { transformResponse } from "../components/utils/transformResponse";

export const useMain = () => {
	const { main, setMain, isLoadingMain, setIsloadingMain } = useRecipeBookContext();

	const loadMainData = async () => {
		setIsloadingMain(true);

		if (main !== null) {
			setIsloadingMain(false);
			return;
		}
		
		try {
			const data = await getFetchData<MainResponse>('main');
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