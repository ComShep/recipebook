import { createContext, useContext, useState, type ReactNode } from "react";
import type { CoockingTips, Main, Recipe, RecipeBookContextType } from "../types/types";



const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined);

export const RecipeBookProvider = ({ children }: { children: ReactNode }) => {
	const [recipes, setRecipes] = useState<Array<Recipe> | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [recipeDetail, setRecipeDetail] = useState<Recipe | null>(null)
	const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(false);

	const [main, setMain] = useState <Main | null>(null);
	const [isLoadingMain, setIsloadingMain] = useState<boolean>(false);

	const [cookingTips, setCookingTips] = useState <CoockingTips | null>(null);
	const [isLoadingCookingTips, setIsLoadingCookingTips] = useState<boolean>(false)

	const returnValue = {
		main,
		recipes,
		recipeDetail,
		cookingTips,

		setMain,
		setRecipes,
		setRecipeDetail,
		setCookingTips,

		isLoadingMain,
		isLoading,
		isLoadingDetail,
		isLoadingCookingTips,
		
		setIsloadingMain,
		setIsLoading,
		setIsLoadingDetail,
		setIsLoadingCookingTips,
	}

	return (
		<RecipeBookContext.Provider value={returnValue}>
			{children}
		</RecipeBookContext.Provider>
	)
}

export const useRecipeBookContext = () => {
	const context = useContext(RecipeBookContext);

	if (context === undefined) {
		throw new Error('Ошибка контекста')
	}

	return context;
}